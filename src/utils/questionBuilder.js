import { formatElectronConfig } from './formatters'
// Generates 4 typed questions for a given element

const VALENCY_POOL = [0, 1, 2, 3, 4, 5, 6, 7]
const GROUP_POOL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const PERIOD_POOL = [1, 2, 3, 4, 5, 6, 7]

function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

function wrongNums(correct, pool, count = 3) {
    return shuffle(pool.filter(n => n !== correct)).slice(0, count)
}

function getValencyLogic(el) {
    if (el.group === 1) return `Group 1 elements have 1 valence electron. They tend to lose this 1 electron to achieve a stable noble gas core.`
    if (el.group === 2) return `Group 2 elements have 2 valence electrons. They tend to lose these 2 electrons to stabilize.`
    if (el.group === 13) return `Group 13 elements have 3 valence electrons (${formatElectronConfig('s2 p1')}). They tend to lose or share 3 electrons.`
    if (el.group === 14) return `Group 14 elements have 4 valence electrons (${formatElectronConfig('s2 p2')}). They tend to share 4 electrons to complete their octet.`
    if (el.group === 15) return `Group 15 elements have 5 valence electrons (${formatElectronConfig('s2 p3')}). They need 3 more electrons to complete an octet.`
    if (el.group === 16) return `Group 16 elements have 6 valence electrons (${formatElectronConfig('s2 p4')}). They need 2 more electrons to complete an octet.`
    if (el.group === 17) return `Group 17 elements have 7 valence electrons (${formatElectronConfig('s2 p5')}). They only need 1 more electron to complete an octet.`
    if (el.group === 18) return `Noble gases have completely filled valence shells, making them chemically inert under standard conditions.`
    if (el.category === 'Transition Metal') return `As a transition metal in the d-block, it can utilize both its outer s and inner d electrons for bonding, leading to variable valencies.`
    return `The valency represents the number of electrons it needs to lose, gain, or share to reach a stable state.`
}

function getCategoryLogic(el) {
    if (el.category === 'Alkali Metal') return `It is located in Group 1 (the far left column), which consists exclusively of highly reactive Alkali Metals (excluding Hydrogen).`
    if (el.category === 'Alkaline Earth Metal') return `It is located in Group 2, which consists of the reactive Alkaline Earth Metals.`
    if (el.category === 'Transition Metal') return `It is located in the d-block center of the periodic table, where elements are classified as Transition Metals.`
    if (el.category === 'Metalloid') return `It sits exactly on the diagonal "staircase" line in the p-block that divides metals and nonmetals.`
    if (el.category === 'Noble Gas') return `It sits in Group 18, the far right column composed of unreactive Noble Gases with full electron shells.`
    if (el.category === 'Nonmetal') return `It is located on the right side of the periodic table (or top-left for H) and lacks metallic properties.`
    return `It is classified based on its distinct chemical and physical properties placing it in this family.`
}

export function buildQuestions(el) {
    const valencyLabel = el.valencyNote ?? String(el.valency)
    const formattedConfig = formatElectronConfig(el.config)

    // Q1 — Valency
    const wrongValencies = wrongNums(el.valency, VALENCY_POOL)
    const valencyOptions = shuffle([
        {
            label: valencyLabel,
            isCorrect: true,
            explanation: `Explanation:\n${el.name} (Atomic No. ${el.atomicNumber}) has an outer electron configuration of ${formattedConfig}.\n${getValencyLogic(el)}\nTherefore, its valency is ${valencyLabel}.\n\nShortcut Tip:\nGroups 1-2 = Valency 1-2. Groups 13-17 = Valency 3, 4, 3, 2, 1. Noble gases = 0.`
        },
        ...wrongValencies.map(v => ({
            label: String(v),
            isCorrect: false,
            explanation: `Why ${v} is wrong:\nA valency of ${v} would imply the element needs to lose, gain, or share exactly ${v} electrons to stabilize. Given ${el.name}'s configuration of ${formattedConfig}, a valency of ${v} is physically incorrect.`
        })),
    ])

    // Q2 — Category
    const catOptions = shuffle(
        el.categoryOptions.map(cat => ({
            label: cat,
            isCorrect: cat === el.category,
            explanation: cat === el.category
                ? `Explanation:\n${el.name} has atomic number ${el.atomicNumber}.\n${getCategoryLogic(el)}\nTherefore, it is a ${cat}.\n\nShortcut Tip:\nFar left = s-block metals. Center = d-block transition metals. Staircase = Metalloids. Far right = Noble gases.`
                : `Why ${cat} is wrong:\n${cat}s are located in a completely different section of the periodic table. ${el.name}'s electron configuration (${formattedConfig}) places it elsewhere, fundamentally preventing it from having ${cat} properties.`
        }))
    )

    // Q3 — Group
    const wrongGroups = wrongNums(el.group, GROUP_POOL)
    const groupOptions = shuffle([
        {
            label: `Group ${el.group}`,
            isCorrect: true,
            explanation: `Explanation:\n${el.name} has atomic number ${el.atomicNumber}. Its outer electron configuration is ${formattedConfig}.\nThe group number corresponds to the structural column in the periodic table, derived directly from the valence electrons.\nTherefore, it falls exactly into Group ${el.group}.\n\nShortcut Tip:\nFor elements strictly in groups 13-18, sum the outer s and p electrons, then add 10 to get the exact group number.`
        },
        ...wrongGroups.map(g => ({
            label: `Group ${g}`,
            isCorrect: false,
            explanation: `Why Group ${g} is wrong:\nElements in Group ${g} have a completely different number of valence electrons. Since ${el.name} has a configuration of ${formattedConfig}, placing it in Group ${g} violates quantum mechanical shell filling rules.`
        })),
    ])

    // Q4 — Period
    const wrongPeriods = wrongNums(el.period, PERIOD_POOL)
    const periodOptions = shuffle([
        {
            label: `Period ${el.period}`,
            isCorrect: true,
            explanation: `Explanation:\nThe period number equals the highest principal energy level (n) in the electron configuration.\n${el.name}'s outermost shell being filled is n = ${el.period} (seen in ${formattedConfig}).\nTherefore, it sits in Period ${el.period}.\n\nShortcut Tip:\nLook at the biggest leading number in the electron configuration (e.g., in ${formatElectronConfig('4s2')}, the number 4). That number is always the period!`
        },
        ...wrongPeriods.map(p => ({
            label: `Period ${p}`,
            isCorrect: false,
            explanation: `Why Period ${p} is wrong:\nPeriod ${p} elements have their outermost electrons actively filling the ${p}th energy shell (n = ${p}). ${el.name} does not have its outermost shell at level ${p}.`
        })),
    ])

    return [
        { text: `What is the valency of ${el.name} (${el.symbol})?`, options: valencyOptions, correctLabel: valencyLabel },
        { text: `What type of element is ${el.symbol}?`, options: catOptions, correctLabel: el.category },
        { text: `Which group does ${el.symbol} belong to?`, options: groupOptions, correctLabel: `Group ${el.group}` },
        { text: `In which period does ${el.symbol} sit?`, options: periodOptions, correctLabel: `Period ${el.period}` },
    ]
}
