import { useGlobalScore } from '../../context/GlobalScoreContext'

export default function GlobalScoreHeader() {
    const { totalAnswered, totalCorrect, totalRetries } = useGlobalScore()

    if (totalAnswered === 0) return null

    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

    return (
        <div className="fixed top-0 left-0 w-full z-50 pointer-events-none p-4 sm:p-6 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]">
            <div className="flex justify-start">
                <div className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:px-5 flex items-center gap-4 sm:gap-6 shadow-2xl pointer-events-auto transition-transform hover:scale-105">

                    {/* Answered Stat */}
                    <div className="flex flex-col">
                        <span className="font-display font-black text-lg text-content-primary leading-none">
                            {totalAnswered}
                        </span>
                        <span className="font-display text-[9px] text-content-muted tracking-widest uppercase mt-1">
                            Answered
                        </span>
                    </div>

                    <div className="w-[1px] h-6 bg-white/10" />

                    {/* Correct Stat & Accuracy */}
                    <div className="flex flex-col">
                        <span className="font-display font-black text-lg text-accent-green leading-none">
                            {totalCorrect} <span className="text-sm font-medium opacity-50 ml-1">({accuracy}%)</span>
                        </span>
                        <span className="font-display text-[9px] text-content-muted tracking-widest uppercase mt-1">
                            Correct
                        </span>
                    </div>

                    {totalRetries > 0 && (
                        <>
                            <div className="w-[1px] h-6 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="font-display font-black text-lg text-accent-cyan leading-none">
                                    {totalRetries}
                                </span>
                                <span className="font-display text-[9px] text-content-muted tracking-widest uppercase mt-1">
                                    Retries
                                </span>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}
