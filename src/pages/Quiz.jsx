import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import Background from '../components/layout/Background'
import AtomDecoration from '../components/layout/AtomDecoration'
import ElementCard from '../components/ui/ElementCard'
import ProgressBar from '../components/ui/ProgressBar'
import ScoreBadge from '../components/ui/ScoreBadge'
import QuestionCard from '../components/quiz/QuestionCard'
import Scratchpad from '../components/quiz/Scratchpad'
import ElementResults from '../components/quiz/ElementResults'
import FinalResults from '../components/quiz/FinalResults'
import { useQuiz } from '../hooks/useQuiz'
import { stagger, slideInLeft } from '../utils/animations'

export default function Quiz() {
    const navigate = useNavigate()
    const location = useLocation()
    const startingIndex = location.state?.startingIndex ?? null

    const {
        elementQueue, currentIndex, currentElement, questions,
        phase, answers, selected, elementScore, totalScore, elementKey,
        handleAnswer, retryElement, goNext,
    } = useQuiz(startingIndex)

    if (!currentElement) return null

    const totalAnswered = answers.filter(Boolean).length

    return (
        <div className="relative min-h-screen bg-dark-primary overflow-x-hidden">
            <Background />
            <AtomDecoration />

            <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-10 pb-20">

                {/* Header */}
                <header className="w-full max-w-3xl flex items-center justify-between mb-12">
                    <button
                        onClick={() => navigate('/')}
                        className="font-display text-[13px] text-accent-cyan tracking-[3px] uppercase hover:opacity-70 transition-opacity"
                    >
                        ← ChemQuiz
                    </button>
                    <ProgressBar current={currentIndex + 1} total={elementQueue.length} />
                </header>

                {/* Final results screen */}
                {phase === 'quiz-done' ? (
                    <FinalResults totalScore={totalScore} totalElements={elementQueue.length} />
                ) : (
                    /* Quiz content — AnimatePresence key re-mounts on element change */
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={elementKey}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
                            exit={{ opacity: 0, x: -60, transition: { duration: 0.25, ease: 'easeIn' } }}
                            className="flex flex-col items-center w-full max-w-3xl"
                        >
                            {/* Element card */}
                            <ElementCard element={currentElement} />

                            {/* Score badge */}
                            <ScoreBadge score={totalScore} total={currentIndex * 4 + totalAnswered} />

                            {/* Question cards with stagger */}
                            <motion.div
                                className="w-full flex flex-col gap-8"
                                variants={stagger}
                                initial="hidden"
                                animate="visible"
                            >
                                {questions.flatMap((q, qi) => {
                                    const cards = [
                                        <QuestionCard
                                            key={`q-${qi}`}
                                            question={q}
                                            questionIndex={qi}
                                            answer={answers[qi]}
                                            selectedOptionIndex={selected[qi]}
                                            onAnswer={handleAnswer}
                                        />
                                    ];
                                    if (qi < questions.length - 1) {
                                        cards.push(<Scratchpad key={`scratch-${qi}`} currentElement={currentElement} />);
                                    }
                                    return cards;
                                })}
                            </motion.div>

                            {/* Element results panel */}
                            <AnimatePresence>
                                {phase === 'element-done' && (
                                    <ElementResults
                                        elementScore={elementScore}
                                        isLast={currentIndex >= elementQueue.length - 1}
                                        onNext={goNext}
                                        onRetry={retryElement}
                                    />
                                )}
                            </AnimatePresence>

                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    )
}
