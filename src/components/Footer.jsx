export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Vasu Singhal</span>
        <span>built with React + Tailwind</span>
      </div>
    </footer>
  )
}
