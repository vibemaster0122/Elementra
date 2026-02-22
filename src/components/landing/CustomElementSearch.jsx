import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { ALL_ELEMENTS } from '../../data/allElements'

export default function CustomElementSearch({ onGenerate }) {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if (!inputValue.trim()) {
            setError('Please enter an atomic number.')
            return
        }

        const num = parseInt(inputValue, 10)
        if (isNaN(num) || num < 1 || num > 118) {
            setError('Valid atomic numbers are between 1 and 118.')
            return
        }

        const element = ALL_ELEMENTS.find(el => el.atomicNumber === num)
        if (element) {
            onGenerate(element)
            setInputValue('')
        } else {
            setError('Element data not found.')
        }
    }

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-xl mx-auto mt-20 mb-8"
        >
            <div className="bg-dark-card border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-glow-blue">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50" />

                <div className="text-center mb-6">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-content-primary tracking-tight mb-2">
                        Custom Element Mode
                    </h3>
                    <p className="text-content-secondary text-sm">
                        Test your knowledge on any specific element instantly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                    <div className="relative">
                        <input
                            type="number"
                            min="1"
                            max="118"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter Atomic Number (1–118)"
                            className="w-full bg-dark-secondary border border-white/10 rounded-xl px-5 py-4 text-center font-display text-lg sm:text-xl text-content-primary placeholder-content-muted outline-none transition-all duration-200 focus:border-accent-cyan focus:shadow-glow-cyan"
                        />
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-accent-red text-sm text-center font-medium"
                            >
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        className="w-full bg-accent-cyan text-dark-primary font-display font-bold text-[14px] tracking-widest uppercase py-4 rounded-xl shadow-glow-cyan hover:bg-white transition-colors duration-200"
                    >
                        Generate Questions →
                    </button>
                </form>
            </div>
        </motion.div>
    )
}
