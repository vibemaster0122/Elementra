import { useState, useMemo, useCallback } from 'react'
import { getShuffledElements, ELEMENTS } from '../data/elements'
import { buildQuestions } from '../utils/questionBuilder'
import { useGlobalScore } from '../context/GlobalScoreContext'

/**
 * Central quiz state machine.
 * phase: 'answering' | 'element-done' | 'quiz-done'
 */
export function useQuiz(initialIndex = null, customElements = null) {
    const [elementQueue] = useState(() => {
        if (customElements) return customElements
        const shuffled = getShuffledElements()
        if (initialIndex !== null && initialIndex >= 0 && initialIndex < ELEMENTS.length) {
            const targetElement = ELEMENTS[initialIndex]
            const idx = shuffled.findIndex(e => e.symbol === targetElement.symbol)
            if (idx !== -1) {
                // Swap the selected element to the front
                [shuffled[0], shuffled[idx]] = [shuffled[idx], shuffled[0]]
            }
        }
        return shuffled
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [phase, setPhase] = useState('answering')
    const [totalScore, setTotalScore] = useState(0)
    const [elementKey, setElementKey] = useState(0)
    // answers[i] = null | { isCorrect: boolean }
    const [answers, setAnswers] = useState(Array(4).fill(null))
    // which option index was tapped per question
    const [selected, setSelected] = useState(Array(4).fill(null))

    const globalScore = useGlobalScore()

    const currentElement = elementQueue[currentIndex]
    const questions = useMemo(
        () => (currentElement ? buildQuestions(currentElement) : []),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [elementKey] // rebuild on element change
    )

    const elementScore = answers.filter(a => a?.isCorrect).length

    const handleAnswer = useCallback((qi, isCorrect, optionIndex) => {
        setAnswers(prev => {
            if (prev[qi] !== null) return prev   // already answered
            const next = [...prev]
            next[qi] = { isCorrect }

            // Schedule phase change after all 4 answered
            if (next.every(Boolean)) {
                setTimeout(() => setPhase('element-done'), 500)
            }
            return next
        })
        setSelected(prev => {
            const next = [...prev]
            next[qi] = optionIndex
            return next
        })

        // global updates
        if (globalScore) {
            globalScore.incrementAnswered()
            if (isCorrect) {
                globalScore.incrementCorrect()
            }
        }

        if (isCorrect) setTotalScore(s => s + 1)
    }, [globalScore])

    const retryElement = useCallback(() => {
        setTotalScore(s => s - elementScore) // Remove points gained from this element

        if (globalScore) {
            globalScore.incrementRetries()
            globalScore.decrementAnswered(4) // assuming they answered 4 to see retry button
            globalScore.decrementCorrect(elementScore)
        }

        setAnswers(Array(4).fill(null))
        setSelected(Array(4).fill(null))
        setPhase('answering')
    }, [elementScore])

    const goNext = useCallback(() => {
        if (currentIndex >= elementQueue.length - 1) {
            setPhase('quiz-done')
        } else {
            setCurrentIndex(i => i + 1)
            setElementKey(k => k + 1)
            setAnswers(Array(4).fill(null))
            setSelected(Array(4).fill(null))
            setPhase('answering')
        }
    }, [currentIndex, elementQueue.length])

    return {
        elementQueue,
        currentIndex,
        currentElement,
        questions,
        phase,
        answers,
        selected,
        elementScore,
        totalScore,
        elementKey,
        handleAnswer,
        retryElement,
        goNext,
    }
}
