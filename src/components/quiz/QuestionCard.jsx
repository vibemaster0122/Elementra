import { motion } from 'framer-motion'
import { stagger, slideInLeft } from '../../utils/animations'
import OptionButton from '../ui/OptionButton'

/** Single question card with staggered slide-in animation. */
export default function QuestionCard({ question, questionIndex, answer, selectedOptionIndex, onAnswer }) {
    const isAnswered = answer !== null
    const isCorrect = answer?.isCorrect

    return (
        <motion.div
            variants={slideInLeft}
            className="bg-dark-card border border-white/[0.07] rounded-2xl p-5 sm:p-7 transition-colors duration-300"
            style={{ borderColor: isAnswered ? 'rgba(0,229,255,0.12)' : undefined }}
        >
            {/* Question meta */}
            <div className="font-display text-[10px] text-content-muted tracking-[3px] uppercase mb-2">
                Question {questionIndex + 1} of 4
            </div>

            {/* Question text */}
            <p className="text-content-primary font-medium text-base sm:text-[17px] mb-5 leading-snug">
                {question.text}
            </p>

            {/* Options grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {question.options.map((opt, oi) => (
                    <OptionButton
                        key={oi}
                        option={opt}
                        optionIndex={oi}
                        isQuestionAnswered={isAnswered}
                        isSelected={selectedOptionIndex === oi}
                        onSelect={() => onAnswer(questionIndex, opt.isCorrect, oi)}
                    />
                ))}
            </div>

        </motion.div>
    )
}
