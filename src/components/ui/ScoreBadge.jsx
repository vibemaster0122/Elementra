/** Live score badge shown during the quiz. */
export default function ScoreBadge({ score, total }) {
    return (
        <div className="flex items-center gap-2 bg-accent-green/10 border border-accent-green/25 rounded-full px-4 py-1.5 font-display text-[11px] text-accent-green tracking-widest mb-8">
            <span>⚡</span>
            <span>Score: {score} / {total}</span>
        </div>
    )
}
