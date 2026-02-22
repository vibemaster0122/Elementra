// Element dataset — 24 elements used in the quiz

export const ELEMENTS = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', group: 1, period: 1, category: 'Nonmetal', valency: 1, config: '1s¹', categoryOptions: ['Nonmetal', 'Metal', 'Noble Gas', 'Metalloid'] },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', group: 18, period: 1, category: 'Noble Gas', valency: 0, config: '1s²', categoryOptions: ['Noble Gas', 'Nonmetal', 'Metal', 'Metalloid'] },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', group: 2, period: 2, category: 'Alkaline Earth Metal', valency: 2, config: '2s²', categoryOptions: ['Alkaline Earth Metal', 'Alkali Metal', 'Transition Metal', 'Metalloid'] },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', group: 13, period: 2, category: 'Metalloid', valency: 3, config: '2s² 2p¹', categoryOptions: ['Metalloid', 'Nonmetal', 'Metal', 'Alkaline Earth Metal'] },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', group: 14, period: 2, category: 'Nonmetal', valency: 4, config: '2s² 2p²', categoryOptions: ['Nonmetal', 'Metalloid', 'Post-transition Metal', 'Halogen'] },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', group: 16, period: 2, category: 'Nonmetal', valency: 2, config: '2s² 2p⁴', categoryOptions: ['Nonmetal', 'Halogen', 'Metalloid', 'Noble Gas'] },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', group: 17, period: 2, category: 'Halogen', valency: 1, config: '2s² 2p⁵', categoryOptions: ['Halogen', 'Nonmetal', 'Noble Gas', 'Metalloid'] },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', group: 18, period: 2, category: 'Noble Gas', valency: 0, config: '2s² 2p⁶', categoryOptions: ['Noble Gas', 'Nonmetal', 'Metalloid', 'Halogen'] },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', group: 1, period: 3, category: 'Alkali Metal', valency: 1, config: '3s¹', categoryOptions: ['Alkali Metal', 'Alkaline Earth Metal', 'Transition Metal', 'Metalloid'] },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', group: 2, period: 3, category: 'Alkaline Earth Metal', valency: 2, config: '3s²', categoryOptions: ['Alkaline Earth Metal', 'Alkali Metal', 'Transition Metal', 'Nonmetal'] },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminium', group: 13, period: 3, category: 'Post-transition Metal', valency: 3, config: '3s² 3p¹', categoryOptions: ['Post-transition Metal', 'Metalloid', 'Transition Metal', 'Alkaline Earth Metal'] },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', group: 14, period: 3, category: 'Metalloid', valency: 4, config: '3s² 3p²', categoryOptions: ['Metalloid', 'Nonmetal', 'Post-transition Metal', 'Noble Gas'] },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', group: 15, period: 3, category: 'Nonmetal', valency: 3, valencyNote: '3 or 5', config: '3s² 3p³', categoryOptions: ['Nonmetal', 'Metalloid', 'Halogen', 'Noble Gas'] },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', group: 16, period: 3, category: 'Nonmetal', valency: 2, config: '3s² 3p⁴', categoryOptions: ['Nonmetal', 'Metalloid', 'Halogen', 'Noble Gas'] },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', group: 17, period: 3, category: 'Halogen', valency: 1, config: '3s² 3p⁵', categoryOptions: ['Halogen', 'Nonmetal', 'Noble Gas', 'Metalloid'] },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', group: 18, period: 3, category: 'Noble Gas', valency: 0, config: '3s² 3p⁶', categoryOptions: ['Noble Gas', 'Halogen', 'Nonmetal', 'Metalloid'] },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', group: 1, period: 4, category: 'Alkali Metal', valency: 1, config: '4s¹', categoryOptions: ['Alkali Metal', 'Alkaline Earth Metal', 'Transition Metal', 'Post-transition Metal'] },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', group: 2, period: 4, category: 'Alkaline Earth Metal', valency: 2, config: '4s²', categoryOptions: ['Alkaline Earth Metal', 'Alkali Metal', 'Transition Metal', 'Post-transition Metal'] },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', group: 4, period: 4, category: 'Transition Metal', valency: 4, valencyNote: '3 or 4', config: '3d² 4s²', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkali Metal', 'Metalloid'] },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', group: 8, period: 4, category: 'Transition Metal', valency: 2, valencyNote: '2 or 3', config: '3d⁶ 4s²', categoryOptions: ['Transition Metal', 'Alkali Metal', 'Post-transition Metal', 'Metalloid'] },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', group: 10, period: 4, category: 'Transition Metal', valency: 2, valencyNote: '2 or 3', config: '3d⁸ 4s²', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkaline Earth Metal', 'Metalloid'] },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', group: 11, period: 4, category: 'Transition Metal', valency: 2, valencyNote: '1 or 2', config: '3d¹⁰ 4s¹', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkaline Earth Metal', 'Metalloid'] },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', group: 12, period: 4, category: 'Transition Metal', valency: 2, config: '3d¹⁰ 4s²', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkaline Earth Metal', 'Metalloid'] },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', group: 14, period: 4, category: 'Metalloid', valency: 4, config: '4s² 4p²', categoryOptions: ['Metalloid', 'Nonmetal', 'Post-transition Metal', 'Noble Gas'] },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', group: 15, period: 4, category: 'Metalloid', valency: 3, config: '4s² 4p³', categoryOptions: ['Metalloid', 'Nonmetal', 'Post-transition Metal', 'Halogen'] },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', group: 17, period: 4, category: 'Halogen', valency: 1, config: '4s² 4p⁵', categoryOptions: ['Halogen', 'Nonmetal', 'Noble Gas', 'Metalloid'] },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', group: 18, period: 4, category: 'Noble Gas', valency: 0, config: '4s² 4p⁶', categoryOptions: ['Noble Gas', 'Halogen', 'Nonmetal', 'Metalloid'] },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', group: 1, period: 5, category: 'Alkali Metal', valency: 1, config: '5s¹', categoryOptions: ['Alkali Metal', 'Alkaline Earth Metal', 'Transition Metal', 'Post-transition Metal'] },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', group: 11, period: 5, category: 'Transition Metal', valency: 1, valencyNote: '1 or 2', config: '4d¹⁰ 5s¹', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkali Metal', 'Alkaline Earth Metal'] },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', group: 17, period: 5, category: 'Halogen', valency: 1, config: '5s² 5p⁵', categoryOptions: ['Halogen', 'Nonmetal', 'Noble Gas', 'Metalloid'] },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', group: 18, period: 5, category: 'Noble Gas', valency: 0, config: '5s² 5p⁶', categoryOptions: ['Noble Gas', 'Halogen', 'Nonmetal', 'Metalloid'] },
    { atomicNumber: 55, symbol: 'Cs', name: 'Caesium', group: 1, period: 6, category: 'Alkali Metal', valency: 1, config: '6s¹', categoryOptions: ['Alkali Metal', 'Alkaline Earth Metal', 'Transition Metal', 'Post-transition Metal'] },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', group: 10, period: 6, category: 'Transition Metal', valency: 2, valencyNote: '2 or 4', config: '5d⁹ 6s¹', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkali Metal', 'Metalloid'] },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', group: 11, period: 6, category: 'Transition Metal', valency: 1, valencyNote: '1 or 3', config: '5d¹⁰ 6s¹', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkali Metal', 'Metalloid'] },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', group: 12, period: 6, category: 'Transition Metal', valency: 2, valencyNote: '1 or 2', config: '5d¹⁰ 6s²', categoryOptions: ['Transition Metal', 'Post-transition Metal', 'Alkaline Earth Metal', 'Metalloid'] },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', group: 18, period: 6, category: 'Noble Gas', valency: 0, config: '6s² 6p⁶', categoryOptions: ['Noble Gas', 'Halogen', 'Nonmetal', 'Post-transition Metal'] },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', group: 1, period: 7, category: 'Alkali Metal', valency: 1, config: '7s¹', categoryOptions: ['Alkali Metal', 'Alkaline Earth Metal', 'Transition Metal', 'Metalloid'] },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', group: 18, period: 7, category: 'Noble Gas', valency: 0, config: '7s² 7p⁶', categoryOptions: ['Noble Gas', 'Post-transition Metal', 'Metalloid', 'Nonmetal'] },
]

function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

export function getShuffledElements() {
    return shuffle(ELEMENTS)
}
