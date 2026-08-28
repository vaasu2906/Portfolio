import { useEffect, useState } from 'react'

const LINES = [
  { cmd: 'whoami', out: 'Vasu Singhal' },
  { cmd: 'cat role.txt', out: 'Full-Stack Developer — React · Node.js · MongoDB' },
  { cmd: 'cat status.txt', out: 'B.Tech IT, ABES Engineering College · CGPA 8.1 · Class of 2027' },
]

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setDone(true)
      return
    }
    const full = `${LINES[lineIndex].cmd}`
    if (charIndex < full.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, 420)
    return () => clearTimeout(t)
  }, [charIndex, lineIndex])

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-cyan opacity-0 animate-fade-in-up"
        style={{ animationDelay: '80ms' }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
        available for internships &amp; full-stack roles
      </div>

      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
        {/* Terminal window */}
        <div
          className="overflow-hidden rounded-xl border border-line bg-surface opacity-0 shadow-2xl shadow-black/40 animate-fade-in-up"
          style={{ animationDelay: '160ms' }}
        >
          <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted">vasu@portfolio: ~</span>
          </div>
          <div className="min-h-[220px] px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
            {LINES.slice(0, lineIndex).map((l, i) => (
              <div key={i} className="mb-3">
                <div className="text-muted">
                  <span className="text-amber">➜</span> ~ {l.cmd}
                </div>
                <div className="mt-1 text-paper">{l.out}</div>
              </div>
            ))}

            {lineIndex < LINES.length && (
              <div className="text-muted">
                <span className="text-amber">➜</span> ~ {LINES[lineIndex].cmd.slice(0, charIndex)}
                <span className="caret" />
              </div>
            )}

            {done && (
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="#projects"
                  className="rounded-md border border-amber/40 bg-amber/10 px-3 py-1.5 text-xs text-amber transition-colors hover:bg-amber/20"
                >
                  ./view-projects.sh
                </a>
                <a
                  href="/Vasu_Singhal_Resume.pdf"
                  className="rounded-md border border-line px-3 py-1.5 text-xs text-paper transition-colors hover:bg-surface2"
                >
                  ↓ download-resume.pdf
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Profile card, docked like a video-call tile */}
        <div
          className="mx-auto w-full max-w-[280px] opacity-0 animate-fade-in-up md:mx-0"
          style={{ animationDelay: '280ms' }}
        >
          <div className="group overflow-hidden rounded-xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-1 hover:border-amber/30">
            <div className="overflow-hidden">
              <img
                src="/vasu.jpg"
                alt="Vasu Singhal"
                className="aspect-[4/5] w-full scale-100 object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between border-t border-line px-3 py-2">
              <span className="font-mono text-[11px] text-muted">webcam.jpg</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> live
              </span>
            </div>
          </div>
          <p className="mt-3 px-1 font-mono text-[11px] text-muted">
            Saharanpur, UP, India
          </p>
        </div>
      </div>

      <div
        className="mt-14 flex justify-center opacity-0 animate-fade-in-up md:justify-start"
        style={{ animationDelay: '500ms' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 font-mono text-[11px] text-muted transition-colors hover:text-amber"
        >
          scroll
          <span className="inline-block animate-float-slow">↓</span>
        </a>
      </div>
    </section>
  )
}
