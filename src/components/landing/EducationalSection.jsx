import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../../utils/animations'
import { cn } from '../../utils/cn'
import { ELEMENTS } from '../../data/elements'

const ACCORDION_ITEMS = [
    {
        title: 'What is the valency?',
        content: `**Step-by-Step Reasoning:**
Valency is the combining capacity of an element. It represents the number of electrons an atom must lose, gain, or share to reach a stable, full valence shell (usually an octet).

**The Electron Configuration Proof:**
Sodium (atomic no. 11) has an outer configuration of 3s¹. It's highly unstable. By losing that 1 electron, it drops down to a stable, full 2nd shell. Therefore, its valency is 1. Oxygen (2s² 2p⁴) needs 2 more electrons to fill its p-subshell (p⁶), making its valency 2.

**Why Wrong Assumptions Fail:**
A common mistake is assuming valency always equals the number of valence electrons. For example, Nitrogen (Group 15) has 5 outer electrons (2s² 2p³). Its valency is NOT 5; it is 3, because gaining 3 electrons is easier than losing 5.

**Shortcut Technique ⚡**
Groups 1 & 2 = Valency 1 & 2. 
Groups 13 to 17 = count down: 3, 4, 3, 2, 1. 
Group 18 (Noble Gases) = 0.`
    },
    {
        title: 'What type of element is it?',
        content: `**Step-by-Step Reasoning:**
Elements are classified into families (like Alkali Metals or Halogens) based on their distinct macroscopic properties and reactivity, which are fundamentally driven by how tightly they hold their outermost electrons.

**The Electron Configuration Proof:**
Elements with loosely bound outer s or d electrons easily give them up, making them excellent conductors and highly malleable—these are Metals. Elements holding tightly to nearly-full p shells tend to steal electrons rather than share them—these are Nonmetals.

**Why Wrong Assumptions Fail:**
Don't assume state of matter dictates the type. Carbon is a hard solid but is a Nonmetal. Mercury is a liquid but is a Transition Metal.

**Shortcut Technique ⚡**
Far Left (s-block) = Alkali & Alkaline Earth Metals. 
Center (d-block) = Transition Metals. 
The diagonal "staircase" on the right = Metalloids. 
Right of the staircase = Nonmetals. 
Far Right Column = Noble Gases.`
    },
    {
        title: 'Which group does it belong to?',
        content: `**Step-by-Step Reasoning:**
The group (vertical column) dictates the structural organization of elements. Elements placed in the same group possess the exact same number of valence electrons, which is why they share very similar chemical behavior.

**The Electron Configuration Proof:**
Count the total electrons in the outermost principal shell. For Calcium (4s²), there are 2 outer electrons, placing it perfectly in Group 2.

**Why Wrong Assumptions Fail:**
A frequent error is forgetting to account for the sunken d-block (Transition Metals) when counting across the periodic table, misaligning the p-block elements by 10 positions.

**Shortcut Technique ⚡**
For elements strictly in the p-block (Groups 13-18), simply sum the outer s and p electrons, then add 10. 
Example: Silicon is 3s² 3p². 2 + 2 = 4. Add 10 = Group 14.`
    },
    {
        title: 'Which period does it belong to?',
        content: `**Step-by-Step Reasoning:**
The period (horizontal row) corresponds directly to the highest principal quantum number (n). This represents the outermost energy shell currently housing electrons around the nucleus.

**The Electron Configuration Proof:**
By identifying the highest energy level being filled, the period is revealed instantly. Potassium is 4s¹. Since the 4th shell is occupied, it sits in Period 4.

**Why Wrong Assumptions Fail:**
Many students think the *last subshell being filled* indicates the period. For Iron (3d⁶ 4s²), the very last electrons technically fill the 3d inner subshell, but the highest active shell is still the 4th shell.

**Shortcut Technique ⚡**
Just find the mathematically largest prefix number in the entire electron configuration (e.g., the "6" in 6s²). That number is always exactly the period!`
    }
]

const SHORTCUTS = [
    { title: 'Valency Pattern', text: '1, 2... 3, 4, 3, 2, 1, 0 across the main groups.' },
    { title: 'The Period Rule', text: 'The largest leading number in the electron config = the period.' },
    { title: '+10 Group Trick', text: 'For p-block elements: outer s electrons + p electrons + 10.' },
    { title: 'Block Mapping', text: 's-block = active metals, d-block = transition metals.' }
]

function AccordionItem({ item, isOpen, onClick }) {
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-dark-card transition-colors hover:border-white/20">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left outline-none"
            >
                <span className="font-display font-medium text-[15px] sm:text-[17px] text-content-primary">
                    {item.title}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-accent-cyan flex-shrink-0 ml-4 font-bold"
                >
                    ↓
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-5 sm:p-6 pt-0 text-content-secondary text-sm leading-relaxed whitespace-pre-wrap">
                            {/* Simple markdown-ish bold replacement for the subheaders */}
                            {item.content.split('**').map((chunk, i) =>
                                i % 2 === 1 ? <strong key={i} className="text-content-primary block mt-4 mb-1">{chunk}</strong> : chunk
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function EducationalSection() {
    const [openIndex, setOpenIndex] = useState(-1)
    const [isChartOpen, setIsChartOpen] = useState(false)

    return (
        <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 font-display text-[11px] text-content-muted tracking-[2px] uppercase mb-6">
                    Behind the Logic
                </div>
                <h2 className="font-display font-black text-3xl sm:text-5xl text-content-primary tracking-tight mb-6">
                    Master the <span className="text-accent-cyan glow-text-cyan">Foundations</span>
                </h2>
                <p className="max-w-2xl mx-auto text-content-secondary text-base sm:text-lg leading-relaxed">
                    Don't just memorize the periodic table. Understand the quantum mechanics and structural laws governing every element.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="w-full flex flex-col gap-4 mb-24"
            >
                {ACCORDION_ITEMS.map((item, i) => (
                    <motion.div key={i} variants={fadeUp}>
                        <AccordionItem
                            item={item}
                            isOpen={openIndex === i}
                            onClick={() => {
                                setOpenIndex(openIndex === i ? -1 : i)
                                setIsChartOpen(false)
                            }}
                        />
                    </motion.div>
                ))}

                {/* Element Chart Accordion */}
                <motion.div variants={fadeUp}>
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-dark-card transition-colors hover:border-white/20">
                        <button
                            onClick={() => {
                                setIsChartOpen(!isChartOpen)
                                setOpenIndex(-1) // close normal accordion items
                            }}
                            className="w-full flex items-center justify-between p-5 sm:p-6 text-left outline-none"
                        >
                            <span className="font-display font-medium text-[15px] sm:text-[17px] text-content-primary">
                                The Reference Chart (Valency, Groups, Periods & Element Types)
                            </span>
                            <motion.span
                                animate={{ rotate: isChartOpen ? 180 : 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="text-accent-cyan flex-shrink-0 ml-4 font-bold"
                            >
                                ↓
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isChartOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="p-5 sm:p-6 pt-0 overflow-x-auto custom-scrollbar">
                                        <div className="sm:hidden text-[10px] text-content-muted uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                                            <span>← Swipe to view full chart →</span>
                                        </div>
                                        <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                                            <thead>
                                                <tr className="border-b border-white/10 text-content-muted">
                                                    <th className="py-3 px-4 font-display uppercase tracking-wider text-[11px]">Element</th>
                                                    <th className="py-3 px-4 font-display uppercase tracking-wider text-[11px]">Type</th>
                                                    <th className="py-3 px-4 font-display uppercase tracking-wider text-[11px]">Group</th>
                                                    <th className="py-3 px-4 font-display uppercase tracking-wider text-[11px]">Period</th>
                                                    <th className="py-3 px-4 font-display uppercase tracking-wider text-[11px]">Valency</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ELEMENTS.map(el => (
                                                    <tr key={el.symbol} className="border-b border-white/[0.05] hover:bg-white/[0.03] text-content-secondary transition-colors">
                                                        <td className="py-3 px-4 whitespace-nowrap">
                                                            <strong className="text-accent-cyan mr-3 inline-block w-6">{el.symbol}</strong>
                                                            {el.name}
                                                        </td>
                                                        <td className="py-3 px-4">{el.category}</td>
                                                        <td className="py-3 px-4">{el.group}</td>
                                                        <td className="py-3 px-4">{el.period}</td>
                                                        <td className="py-3 px-4 font-bold text-white">{el.valencyNote || el.valency}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="w-full bg-dark-secondary rounded-2xl border border-accent-cyan/20 p-8 sm:p-12 text-center shadow-glow-blue relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-accent-cyan/5 border-[10px] border-dark-primary rounded-2xl pointer-events-none" />

                <h3 className="relative font-display font-black text-2xl sm:text-3xl text-content-primary mb-10">
                    How to <span className="text-accent-cyan">Never</span> Get These Wrong Again
                </h3>

                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                    {SHORTCUTS.map((shortcut, i) => (
                        <div key={i} className="bg-dark-card border border-white/10 rounded-xl p-5 hover:border-accent-cyan/40 transition-colors">
                            <h4 className="font-display font-bold text-[13px] text-accent-cyan tracking-wider uppercase mb-2">
                                {shortcut.title}
                            </h4>
                            <p className="text-content-secondary text-sm">
                                {shortcut.text}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

        </section>
    )
}
