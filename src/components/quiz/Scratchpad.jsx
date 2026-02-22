import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { slideInLeft } from '../../utils/animations'

import { formatElectronConfig, inverseMap } from '../../utils/formatters'

const parseElectrons = (val) => {
    let total = 0
    let capacityError = false

    // Normalize val back to digits in case it contains some Unicode from elsewhere
    const normalized = val.split('').map(char => inverseMap[char] || char).join('')

    // Scan the string for orbital letters followed by digits
    const subshellMatches = normalized.matchAll(/([spdf])(\d+)/gi)
    for (const match of subshellMatches) {
        const orbital = match[1].toLowerCase()
        const num = parseInt(match[2], 10)

        total += num

        // Validate against maximum orbital electron capacities
        if (orbital === 's' && num > 2) capacityError = true
        if (orbital === 'p' && num > 6) capacityError = true
        if (orbital === 'd' && num > 10) capacityError = true
        if (orbital === 'f' && num > 14) capacityError = true
    }

    return { total, capacityError }
}

export default function Scratchpad({ currentElement }) {
    const textareaRef = useRef(null)
    const [rawConfig, setRawConfig] = useState('')

    const handleInput = (e) => {
        const target = e.target
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
    }

    const handleConfigChange = (e) => {
        // We preserve just the raw characters. The formatElectronConfig utility 
        // will identify where tags go during rendering.
        setRawConfig(e.target.value)
    }

    // Initialize auto-expand textarea on mount
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [])

    const { total, capacityError } = parseElectrons(rawConfig)
    const isError = rawConfig.trim() !== '' && (capacityError || (currentElement && total > currentElement.atomicNumber))

    // Formatted version with <sup> tags for display
    const formattedDisplay = formatElectronConfig(rawConfig)

    return (
        <motion.div
            variants={slideInLeft}
            className="w-full bg-dark-card border border-white/[0.07] rounded-2xl p-4 sm:p-5 flex flex-col gap-4 transition-colors duration-300 focus-within:border-white/[0.15]"
        >
            {/* Electron Configuration Section */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] text-content-muted tracking-[3px] uppercase">
                        Electron Configuration
                    </span>
                    {isError && (
                        <span className="font-display text-[10px] text-red-500 tracking-[1px] uppercase animate-pulse">
                            Error/Exceeded
                        </span>
                    )}
                </div>

                <div className="relative w-full h-8 sm:h-9">
                    {/* Mirror layer: Displays the HTML with <sup> tags */}
                    <div
                        className={`absolute inset-0 pointer-events-none text-sm sm:text-[17px] font-medium py-1 transition-colors ${isError ? 'text-red-400' : 'text-content-primary'
                            }`}
                        dangerouslySetInnerHTML={{ __html: formattedDisplay }}
                    />

                    {/* Input layer: Invisible but captures keystrokes */}
                    <input
                        type="text"
                        value={rawConfig}
                        onChange={handleConfigChange}
                        placeholder={rawConfig ? "" : "e.g. 1s2 2s2 2p6..."}
                        className="absolute inset-0 w-full bg-transparent text-sm sm:text-[17px] font-medium focus:outline-none placeholder:text-content-muted/30 opacity-0 caret-white py-1"
                        spellCheck={false}
                    />
                </div>
            </div>

            <div className="w-full h-px bg-white/[0.05]" />

            {/* General Scratchpad Section */}
            <div className="flex flex-col gap-2 relative">
                <span className="font-display text-[10px] text-content-muted tracking-[3px] uppercase">
                    Scratchpad (Not Graded)
                </span>
                <textarea
                    ref={textareaRef}
                    rows={2}
                    onInput={handleInput}
                    placeholder="Write rough work, math, or notes here..."
                    className="w-full bg-transparent text-content-primary text-sm sm:text-base resize-none focus:outline-none placeholder:text-content-muted/30 leading-relaxed overflow-hidden"
                    spellCheck={false}
                />
            </div>
        </motion.div>
    )
}
