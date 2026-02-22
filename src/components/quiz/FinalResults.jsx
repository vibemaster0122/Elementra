import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

/** Quiz-complete screen shown after all elements are finished. */
export default function FinalResults({ totalScore, totalElements }) {
    const navigate = useNavigate()
    const possible = totalElements * 4
    const pct = Math.round((totalScore / possible) * 100)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-3xl text-center bg-dark-card border border-white/[0.07] rounded-3xl px-8 py-16"
        >
            <div className="font-display text-3xl sm:text-5xl font-black gradient-text-gold mb-2">
                Quiz Complete! 🎉
            </div>
            <p className="text-content-secondary text-base mb-10">
                You completed all {totalElements} elements. Here's your result:
            </p>

            <div className="font-display font-black text-6xl sm:text-7xl text-accent-gold text-glow-gold mb-1">
                {totalScore} / {possible}
            </div>
            <span className="font-display font-medium text-[11px] text-content-muted tracking-[3px] uppercase mb-4 block">Elementra Test Complete</span>
            <div className="font-display text-[13px] text-content-muted tracking-widest uppercase mb-12">
                {pct}% Accuracy · {totalElements} Elements Completed
            </div>

            <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { navigate('/quiz', { replace: true }); window.location.reload() }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-display text-[13px] font-bold tracking-widest uppercase text-dark-primary shadow-glow-blue"
                style={{ background: 'linear-gradient(135deg, #3d7eff, #00e5ff)' }}
            >
                🔁 Try Again
            </motion.button>
        </motion.div >
    )
}
