import { createContext, useContext, useState } from 'react'

const GlobalScoreContext = createContext()

export function GlobalScoreProvider({ children }) {
    const [totalAnswered, setTotalAnswered] = useState(0)
    const [totalCorrect, setTotalCorrect] = useState(0)
    const [totalRetries, setTotalRetries] = useState(0)

    const incrementAnswered = () => setTotalAnswered(prev => prev + 1)
    const incrementCorrect = () => setTotalCorrect(prev => prev + 1)
    const incrementRetries = () => setTotalRetries(prev => prev + 1)
    const decrementAnswered = (count) => setTotalAnswered(prev => Math.max(0, prev - count))
    const decrementCorrect = (count) => setTotalCorrect(prev => Math.max(0, prev - count))

    return (
        <GlobalScoreContext.Provider value={{
            totalAnswered, totalCorrect, totalRetries,
            incrementAnswered, incrementCorrect, incrementRetries,
            decrementAnswered, decrementCorrect
        }}>
            {children}
        </GlobalScoreContext.Provider>
    )
}

export function useGlobalScore() {
    return useContext(GlobalScoreContext)
}
