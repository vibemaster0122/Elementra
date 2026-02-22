// Fixed animated background: grid + radial gradient + floating orbs
export default function Background() {
    return (
        <>
            {/* CSS grid */}
            <div className="fixed inset-0 bg-grid-pattern animate-grid-pulse pointer-events-none z-0" />

            {/* Radial blue glow from top */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61,126,255,0.07) 0%, transparent 70%)' }}
            />

            {/* Floating orbs */}
            <div
                className="fixed -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none z-0 animate-orb-float"
                style={{ background: 'rgba(0,229,255,0.04)', filter: 'blur(80px)' }}
            />
            <div
                className="fixed -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none z-0 animate-orb-float-2"
                style={{ background: 'rgba(124,58,237,0.05)', filter: 'blur(80px)' }}
            />
            <div
                className="fixed top-1/2 right-[10%] w-64 h-64 rounded-full pointer-events-none z-0 animate-orb-float-3"
                style={{ background: 'rgba(61,126,255,0.04)', filter: 'blur(80px)' }}
            />
        </>
    )
}
