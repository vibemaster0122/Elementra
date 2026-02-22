export const superscriptMap = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
}

export const inverseMap = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '\u00B9': '1', '\u00B2': '2', '\u00B3': '3' // Standard superscript 1, 2, 3 variations
}

/**
 * Formats a raw electron configuration string (e.g., 1s2 2s2 2p6 3d10) 
 * into an HTML version with <sup> tags (e.g., 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3d<sup>10</sup>).
 */
export const formatElectronConfig = (val) => {
    if (!val) return ''

    // 1. Normalize by converting all known Unicode superscripts back to digits
    const normalized = val.split('').map(char => inverseMap[char] || char).join('')

    // 2. Format using a subshell-aware regex: (Shell Prefix)?(Orbital)(Electrons)
    // Marks the entire exponent cluster for superscripting with HTML tags.
    return normalized.replace(/(\d+)?([spdf])(\d+)/gi, (match, shell, orbital, electrons) => {
        return `${shell || ''}${orbital}<sup>${electrons}</sup>`
    })
}
