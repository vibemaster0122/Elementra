import { motion } from 'framer-motion'
import { cardReveal } from '../../utils/animations'

const SHELL_CAPACITIES = [2, 8, 18, 32, 32, 18, 8]

/** Renders animated concentric rings of electrons based on the atomic number */
function ElectronRings({ atomicNumber }) {
  const shells = []
  let remaining = atomicNumber
  for (let cap of SHELL_CAPACITIES) {
    if (remaining <= 0) break
    const count = Math.min(remaining, cap)
    shells.push(count)
    remaining -= count
  }

  return (
    <div className="absolute inset-[2px] pointer-events-none z-10 overflow-hidden rounded-[14px]">
      {shells.map((count, shellIndex) => {
        const size = 64 + shellIndex * 44 // 64, 108, 152, 196, 240, 284...
        const duration = 12 + shellIndex * 8 // Slower outer rings for smoothness
        const direction = shellIndex % 2 === 0 ? 'normal' : 'reverse'

        return (
          <div
            key={shellIndex}
            className="absolute inset-0 m-auto rounded-full border border-accent-cyan/15 mix-blend-screen"
            style={{
              width: size,
              height: size,
              animation: `spin ${duration}s linear ${direction} infinite`
            }}
          >
            {/* Render electrons on this ring */}
            {Array.from({ length: count }).map((_, i) => {
              const angle = (i / count) * 360
              return (
                <div
                  key={i}
                  className="absolute w-[3.5px] h-[3.5px] sm:w-[4px] sm:h-[4px] bg-accent-cyan rounded-full shadow-glow-cyan"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${size / 2}px)`
                  }}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

/**
 * Big periodic-table-style element display card.
 * Animates in with a 3D spring flip on each new element.
 */
export default function ElementCard({ element }) {
  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ perspective: 1200 }}
      className="relative w-44 h-52 sm:w-52 sm:h-60 rounded-2xl card-outer-glow bg-dark-card mb-8 overflow-hidden flex-shrink-0"
    >
      {/* Spinning conic gradient layer */}
      <div className="absolute inset-0 conic-spinner animate-card-spin scale-150" />

      {/* Inner solid background to clip the gradient */}
      <div className="absolute inset-[2px] rounded-[14px] bg-dark-card z-10" />

      {/* Orbiting Electrons Visualization */}
      <ElectronRings atomicNumber={element.atomicNumber} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-1 px-4 drop-shadow-md">
        <span className="font-display text-xs text-content-muted tracking-widest leading-none mb-1">
          {element.atomicNumber}
        </span>
        <span className="font-display font-black leading-none element-symbol-glow" style={{ fontSize: 'clamp(52px, 12vw, 76px)' }}>
          {element.symbol}
        </span>
        <span className="font-display text-accent-cyan tracking-[3px] uppercase text-[10px] sm:text-[11px] mt-1">
          {element.name}
        </span>
      </div>
    </motion.div>
  )
}
