import { useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils/cn'

const LETTERS = ['A', 'B', 'C', 'D']

/**
 * State logic:
 *  - isQuestionAnswered=false  → default, hoverable
 *  - isQuestionAnswered=true, option.isCorrect  → green highlight
 *  - isQuestionAnswered=true, isSelected, !isCorrect → red + shake
 *  - otherwise → dimmed
 */
export default function OptionButton({ option, optionIndex, isQuestionAnswered, isSelected, onSelect }) {
    const controls = useAnimation()

    const state = !isQuestionAnswered
        ? 'default'
        : option.isCorrect
            ? 'correct'
            : isSelected
                ? 'wrong'
                : 'dimmed'

    // Trigger shake on wrong, pulse on correct-selected
    useEffect(() => {
        if (state === 'wrong') {
            controls.start({ x: [0, -7, 7, -5, 5, -3, 3, 0], transition: { duration: 0.45 } })
        }
        if (state === 'correct' && isSelected) {
            controls.start({ scale: [1, 1.03, 1], transition: { duration: 0.35 } })
        }
    }, [state, isSelected, controls])

    const base = 'group relative flex flex-col items-start w-full p-3 rounded-lg border text-sm text-left transition-colors duration-150 outline-none'

    const stateClass = {
        default: 'bg-dark-secondary border-white/10 text-content-secondary cursor-pointer hover:bg-dark-card-hover hover:border-accent-cyan/30 hover:text-content-primary',
        correct: 'bg-accent-green/10 border-accent-green text-accent-green shadow-glow-green cursor-default',
        wrong: 'bg-accent-red/10   border-accent-red   text-accent-red   shadow-glow-red   cursor-default',
        dimmed: 'bg-dark-secondary border-white/5 text-content-muted opacity-40 cursor-default',
    }

    const letterClass = {
        default: 'text-content-muted group-hover:text-accent-cyan',
        correct: 'text-accent-green',
        wrong: 'text-accent-red',
        dimmed: 'text-content-muted',
    }

    return (
        <motion.button
            animate={controls}
            disabled={isQuestionAnswered}
            whileHover={!isQuestionAnswered ? { x: 3 } : undefined}
            whileTap={!isQuestionAnswered ? { scale: 0.97 } : undefined}
            onClick={() => { if (!isQuestionAnswered) onSelect() }}
            className={cn(base, stateClass[state])}
        >
            {/* Left accent bar */}
            <span
                className={cn(
                    'absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg transition-transform duration-150 origin-center scale-y-0',
                    state === 'default' && 'group-hover:scale-y-100 bg-accent-cyan',
                    state === 'correct' && 'scale-y-100 bg-accent-green',
                    state === 'wrong' && 'scale-y-100 bg-accent-red',
                )}
            />

            <div className="flex items-center gap-3 w-full">
                <span className={cn('font-display text-[11px] font-bold min-w-[18px] transition-colors', letterClass[state])}>
                    {LETTERS[optionIndex]}
                </span>
                <span className="leading-snug">{option.label}</span>
            </div>

            {/* Explanation expansion */}
            <AnimatePresence>
                {(state === 'correct' || state === 'wrong') && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 10 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className={cn(
                            "overflow-hidden text-[12.5px] leading-relaxed pl-[30px] whitespace-pre-wrap",
                            state === 'correct' ? 'text-accent-green/90' : 'text-accent-red/90'
                        )}
                        dangerouslySetInnerHTML={{ __html: option.explanation }}
                    />
                )}
            </AnimatePresence>
        </motion.button>
    )
}
