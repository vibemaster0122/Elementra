import { motion } from 'framer-motion'

/** Animated progress bar. fill width transitions smoothly. */
export default function ProgressBar({ current, total }) {
    const pct = Math.round((current / total) * 100)
    return (
        <div className="flex items-center gap-3 font-display text-xs text-content-muted tracking-widest">
            <div className="w-28 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full progress-glow"
                    style={{ background: 'linear-gradient(90deg, #3d7eff, #00e5ff)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                />
            </div>
            <span>{current} / {total}</span>
        </div>
    )
}
