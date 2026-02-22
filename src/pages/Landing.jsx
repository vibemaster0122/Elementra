import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Background from '../components/layout/Background'
import AtomDecoration from '../components/layout/AtomDecoration'
import { ELEMENTS } from '../data/elements'
import { stagger, fadeDown, fadeUp } from '../utils/animations'
import EducationalSection from '../components/landing/EducationalSection'
import CustomElementSearch from '../components/landing/CustomElementSearch'
import CustomQuiz from '../components/landing/CustomQuiz'

const previewElements = ELEMENTS

export default function Landing() {
    const navigate = useNavigate()
    const [customElement, setCustomElement] = useState(null)

    return (
        <div className="relative min-h-screen bg-dark-primary overflow-x-hidden">
            <Background />
            <AtomDecoration />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">

                {/* Badge */}
                <motion.div
                    variants={fadeDown} initial="hidden" animate="visible"
                    className="inline-flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/25 rounded-full px-4 py-1.5 font-display text-[11px] text-accent-cyan tracking-[2px] uppercase mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-glow-cyan animate-blink" />
                    Chemistry Assessment Lab
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={fadeDown} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
                    className="font-display font-black leading-none tracking-tight mb-3 gradient-text"
                    style={{ fontSize: 'clamp(44px, 9vw, 90px)', letterSpacing: '-2px' }}
                >
                    Elementra
                </motion.h1>

                <motion.p
                    variants={fadeDown} initial="hidden" animate="visible" transition={{ delay: 0.15 }}
                    className="font-display text-content-secondary tracking-[4px] uppercase text-sm sm:text-lg mb-10"
                >
                    Periodic Table Mastery Test
                </motion.p>

                {/* Description */}
                <motion.p
                    variants={fadeDown} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
                    className="max-w-lg text-content-secondary text-base sm:text-[17px] leading-relaxed mb-12"
                >
                    How well do you know your elements? Test yourself on{' '}
                    <strong className="text-content-primary">valency, groups, periods, and element types</strong>{' '}
                    across {ELEMENTS.length} carefully selected elements from the periodic table.
                </motion.p>

                {/* Element preview chips */}
                <motion.div
                    variants={stagger} initial="hidden" animate="visible"
                    className="flex flex-wrap gap-3 justify-center mb-12"
                >
                    {previewElements.map((el, i) => (
                        <motion.button
                            key={el.symbol}
                            variants={fadeUp}
                            onClick={() => navigate('/quiz', { state: { startingIndex: i } })}
                            whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,229,255,0.35)', borderColor: 'rgba(0,229,255,0.4)', backgroundColor: 'rgba(26,34,53,1)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center justify-center w-[60px] h-[64px] sm:w-[68px] sm:h-[70px] rounded-lg border border-white/[0.07] bg-dark-card gap-0.5 transition-colors duration-200 cursor-pointer"
                        >
                            <span className="font-display font-bold text-base sm:text-lg text-accent-cyan">{el.symbol}</span>
                            <span className="font-display text-[6.5px] sm:text-[7.5px] text-content-muted tracking-[0.1em] uppercase px-1 leading-tight w-full truncate">{el.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/quiz')}
                    className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-display font-bold text-[15px] tracking-[2px] uppercase text-dark-primary shadow-glow-blue mb-14"
                    style={{ background: 'linear-gradient(135deg, #3d7eff, #00e5ff)' }}
                >
                    Test Yourself
                    <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    >
                        →
                    </motion.span>
                </motion.button>

                {/* Stats row */}
                <motion.div
                    variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }}
                    className="flex items-center gap-6 sm:gap-12 flex-wrap justify-center"
                >
                    {[[ELEMENTS.length.toString(), 'Elements'], ['4', 'Questions Each'], [(ELEMENTS.length * 4).toString(), 'Total Questions']].map(([val, label], i) => (
                        <div key={i} className="text-center">
                            <div className="font-display font-bold text-3xl text-accent-cyan">{val}</div>
                            <div className="font-display text-[11px] text-content-muted tracking-[2px] uppercase mt-1">{label}</div>
                        </div>
                    ))}
                </motion.div>

                <CustomElementSearch onGenerate={setCustomElement} />

                <AnimatePresence mode="wait">
                    {customElement && (
                        <CustomQuiz
                            key={customElement.atomicNumber}
                            element={customElement}
                            onClose={() => setCustomElement(null)}
                        />
                    )}
                </AnimatePresence>

            </div>

            <EducationalSection />

            {/* Footer */}
            <footer className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-8 text-center text-content-muted">
                <div className="w-full h-px bg-white/5 mb-8" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="font-display font-bold text-xs sm:text-sm text-content-secondary tracking-[2px] uppercase mb-2">
                        Created by <span className="text-accent-cyan">Amkon sharma</span>
                    </div>
                    <p className="text-content-muted text-[11px] sm:text-[12px] max-w-md leading-relaxed italic">
                        "Thank you to all the students using this platform. May your chemistry journey be filled with discovery and mastery. Keep exploring!"
                    </p>
                </motion.div>
            </footer>
        </div>
    )
}
