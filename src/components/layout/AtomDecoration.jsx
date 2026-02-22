// Spinning atom decoration — fixed to bottom-right corner
export default function AtomDecoration() {
    return (
        <div className="fixed bottom-5 right-5 w-20 h-20 opacity-15 pointer-events-none z-0">
            {/* Nucleus */}
            <div
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-accent-cyan shadow-glow-cyan"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            {/* Inner ring */}
            <div
                className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full border border-accent-cyan animate-atom-ring-1"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            {/* Outer dashed ring */}
            <div
                className="absolute top-1/2 left-1/2 w-[70px] h-[70px] rounded-full border border-dashed border-accent-cyan animate-atom-ring-2"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </div>
    )
}
