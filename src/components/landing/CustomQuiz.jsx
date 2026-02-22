import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuiz } from '../../hooks/useQuiz'
import ElementCard from '../ui/ElementCard'
import ScoreBadge from '../ui/ScoreBadge'
import QuestionCard from '../quiz/QuestionCard'
import Scratchpad from '../quiz/Scratchpad'
import ElementResults from '../quiz/ElementResults'
import { fadeUp } from '../../utils/animations'

export default function CustomQuiz({ element, onClose }) {
    const quizRef = useRef(null)
    const {
        currentElement, phase, questions, answers, selected, totalScore,
        handleAnswer, retryElement
    } = useQuiz(null, [element])

    // Scroll the quiz into view whenever a new element is loaded
    useEffect(() => {
        if (quizRef.current) {
            quizRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [element])

    // If something goes wrong parsing the element
    if (!currentElement) return null

    return (
        <motion.div
            ref={quizRef}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl mx-auto py-12 px-6 mt-10 mb-20 bg-dark-secondary/50 rounded-3xl border border-white/5 shadow-2xl relative"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none" />

            <div className="flex justify-between items-center mb-12 relative z-10">
                <button
                    onClick={onClose}
                    className="group flex items-center gap-2 text-content-muted hover:text-white transition-colors uppercase tracking-[2px] text-[10px] font-display font-bold py-2 px-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10"
                >
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Close Mode
                </button>
                <ScoreBadge score={totalScore} />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 relative z-10 w-full pl-0 lg:pl-10">
                <div className="lg:sticky lg:top-24 h-max mx-auto lg:mx-0 shrink-0">
                    <ElementCard element={currentElement} />
                </div>

                <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0 flex flex-col gap-8 pb-10">
                    <AnimatePresence mode="popLayout">
                        {phase === 'answering' && questions.flatMap((q, i) => {
                            const cards = [
                                <QuestionCard
                                    key={`${currentElement.symbol}-q${i}`}
                                    question={q}
                                    questionIndex={i}
                                    answer={answers[i]}
                                    selectedOptionIndex={selected[i]}
                                    onAnswer={handleAnswer}
                                />
                            ];
                            if (i < questions.length - 1) {
                                cards.push(<Scratchpad key={`${currentElement.symbol}-scratch-${i}`} currentElement={currentElement} />);
                            }
                            return cards;
                        })}

                        {(phase === 'element-done' || phase === 'quiz-done') && (
                            <ElementResults
                                elementScore={answers.filter(a => a?.isCorrect).length}
                                isLast={true}
                                onNext={onClose}
                                onRetry={() => {
                                    retryElement()
                                    // ensure scroll goes back up if they retry
                                    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}
