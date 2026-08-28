import { useEffect, useState } from 'react'

const links = [
  { path: '~/about', href: '#about' },
  { path: '~/skills', href: '#skills' },
  { path: '~/projects', href: '#projects' },
  { path: '~/achievements', href: '#achievements' },
  { path: '~/contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ink/85 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-lg shadow-black/20' : 'border-line/0'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-paper">
          <span className="text-muted">$</span> vasu<span className="text-amber">.singhal</span>
        </a>

        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 font-mono text-[13px] text-muted transition-colors hover:bg-surface2 hover:text-paper"
            >
              {l.path}
            </a>
          ))}
        </nav>

        <button
          className="font-mono text-sm text-paper md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line px-6 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-muted hover:text-paper"
            >
              {l.path}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
