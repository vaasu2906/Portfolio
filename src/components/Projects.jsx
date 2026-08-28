import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const projects = [
  {
    file: 'banking-ledger.node.js',
    title: 'Banking Ledger & Transaction System',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    points: [
      'Secure banking backend managing end-to-end account operations and financial data.',
      'Real-time ledger engine with atomic credit/debit processing, cutting data-inconsistency errors via strict write-integrity checks.',
      'JWT-based auth with role-level access control, securing every financial endpoint.',
    ],
    demo: null,
    repo: 'https://github.com/Vaasu2906',
  },
  {
    file: 'agora-debate.jsx',
    title: 'Agora Debate Platform',
    stack: ['React', 'Next.js', 'Express.js', 'Socket.io', 'MongoDB'],
    points: [
      "Full-stack community hub for ABES's largest debating society.",
      'Bcrypt + JWT session management securing user and admin dashboards.',
      'Framer Motion + Tailwind UI with modular components for live announcements and event scheduling.',
    ],
    demo: null,
    repo: 'https://github.com/Vaasu2906',
  },
  {
    file: 'groweasy-csv.next.js',
    title: 'GrowEasy AI CSV Importer',
    stack: ['Next.js', 'Node.js', 'Express.js', 'Gemini API'],
    points: [
      'AI-powered CSV importer that maps messy lead exports into a fixed CRM schema using Gemini.',
      'Batched extraction pipeline with JSON-schema validation and automatic retry handling.',
      'Responsive interface with CSV preview, drag-and-drop upload and live import summaries.',
    ],
    demo: 'https://grow-easy-lime.vercel.app/',
    repo: 'https://github.com/Vaasu2906',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeader path="~/projects" title="Things I've built" />
      </Reveal>
      <div className="grid gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.file} delay={i * 110}>
          <article
            className="overflow-hidden rounded-lg border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-xl hover:shadow-black/30"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-surface2 px-5 py-2.5">
              <span className="font-mono text-xs text-muted">{p.file}</span>
              <div className="flex gap-3 font-mono text-xs">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-amber hover:underline">
                    live demo ↗
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
                  source ↗
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 font-display text-lg font-semibold text-paper">{p.title}</h3>
              <ul className="mb-4 space-y-1.5">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-6 text-muted">
                    <span className="mt-1 text-amber">·</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
