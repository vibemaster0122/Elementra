/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: '#080c14',
                    secondary: '#0d1321',
                    card: '#111827',
                    'card-hover': '#1a2235',
                },
                accent: {
                    cyan: '#00e5ff',
                    blue: '#3d7eff',
                    purple: '#7c3aed',
                    green: '#00ff88',
                    red: '#ff3d6a',
                    gold: '#ffd700',
                },
                content: {
                    primary: '#e8edf5',
                    secondary: '#8899bb',
                    muted: '#4a5a7a',
                },
            },
            fontFamily: {
                display: ['Orbitron', 'monospace'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0,229,255,0.4)',
                'glow-cyan-lg': '0 0 50px rgba(0,229,255,0.5)',
                'glow-blue': '0 0 30px rgba(61,126,255,0.4)',
                'glow-green': '0 0 20px rgba(0,255,136,0.4)',
                'glow-red': '0 0 20px rgba(255,61,106,0.4)',
                'glow-gold': '0 0 20px rgba(255,215,0,0.4)',
            },
            animation: {
                'grid-pulse': 'gridPulse 8s ease-in-out infinite',
                'orb-float': 'orbFloat 12s ease-in-out infinite',
                'orb-float-2': 'orbFloat 12s ease-in-out -4s infinite',
                'orb-float-3': 'orbFloat 12s ease-in-out -8s infinite',
                'card-spin': 'cardSpin 8s linear infinite',
                'blink': 'blink 2s ease-in-out infinite',
                'atom-ring-1': 'atomRing1 3s linear infinite',
                'atom-ring-2': 'atomRing2 4s linear reverse infinite',
            },
            keyframes: {
                gridPulse: {
                    '0%,100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
                orbFloat: {
                    '0%,100%': { transform: 'translate(0,0) scale(1)' },
                    '33%': { transform: 'translate(30px,-30px) scale(1.05)' },
                    '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
                },
                cardSpin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                blink: {
                    '0%,100%': { opacity: '1' },
                    '50%': { opacity: '0.3' },
                },
                atomRing1: {
                    from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
                    to: { transform: 'translate(-50%,-50%) rotate(360deg)' },
                },
                atomRing2: {
                    from: { transform: 'translate(-50%,-50%) rotateX(60deg) rotateZ(0deg)' },
                    to: { transform: 'translate(-50%,-50%) rotateX(60deg) rotateZ(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
