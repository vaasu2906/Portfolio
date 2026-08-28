export default function SectionHeader({ path, title }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-xs text-amber">{path}</span>
      <span className="h-px flex-1 bg-line" />
      <h2 className="font-display text-xl font-semibold text-paper sm:text-2xl">{title}</h2>
    </div>
  )
}
