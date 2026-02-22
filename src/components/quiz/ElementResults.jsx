import { motion } from 'framer-motion'
import { slideUp } from '../../utils/animations'

const MESSAGES = {
    perfect: { text: 'Flawless! Every question nailed. 🏆', cls: 'text-accent-gold text-glow-gold' },
    great: { text: 'Great work! Nearly perfect on this one.', cls: 'text-accent-green' },
    ok: { text: "Not bad — a bit more study and you'll ace it.", cls: 'text-accent-cyan' },
    poor: { text: 'Keep going — review this element and try again!', cls: 'text-accent-red' },
}

/** Per-element score panel that slides up after all 4 questions are answered. */
export default function ElementResults({ elementScore, isLast, onNext, onRetry }) {
    const tier = elementScore === 4 ? 'perfect' : elementScore >= 3 ? 'great' : elementScore >= 2 ? 'ok' : 'poor'
    const { text, cls } = MESSAGES[tier]

    return (
        <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="w-full max-w-3xl bg-dark-card border border-white/[0.07] rounded-2xl p-7 mt-6"
        >
            <div className="font-display text-[11px] text-content-muted tracking-[3px] uppercase mb-4">
                Element Score
            </div>

            <div className="flex items-baseline gap-2 mb-2">
                <span className={`font-display font-black text-5xl sm:text-6xl ${cls}`}>{elementScore}</span>
                <span className="font-display text-2xl text-content-muted">/ 4</span>
            </div>

            <p className="text-content-secondary text-sm mb-7">{text}</p>

            <div className="flex flex-wrap items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onNext}
                    className="relative overflow-hidden inline-flex items-center justify-center min-w-[180px] px-8 py-4 rounded-full font-display text-[13px] font-bold tracking-widest uppercase text-accent-cyan border-2 border-accent-cyan transition-colors duration-200 hover:text-dark-primary group"
                >
                    <span className="absolute inset-0 bg-accent-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                    <span className="relative">{isLast ? 'Final Results →' : 'Next Element →'}</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,229,255,0.05)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onRetry}
                    className="inline-flex items-center justify-center min-w-[180px] px-8 py-4 rounded-full font-display text-[13px] font-bold tracking-widest uppercase text-content-secondary border border-white/10 transition-colors duration-200 hover:text-accent-cyan hover:border-accent-cyan/30"
                >
                    ↻ Retry Element
                </motion.button>
            </div>
        </motion.div>
    )
}
