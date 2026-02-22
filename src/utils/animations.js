// Shared Framer Motion animation variants

export const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

export const cardReveal = {
    hidden: { scale: 0.6, opacity: 0, rotateY: 90 },
    visible: {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        transition: { type: 'spring', stiffness: 200, damping: 22 },
    },
    exit: { scale: 0.6, opacity: 0, rotateY: -90, transition: { duration: 0.25 } },
}

export const slideInLeft = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const pageTransition = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, x: -60, transition: { duration: 0.3, ease: 'easeIn' } },
}
