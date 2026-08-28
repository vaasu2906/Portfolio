import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const config = [
  { key: 'degree', value: 'B.Tech, Information Technology' },
  { key: 'college', value: 'ABES Engineering College, Ghaziabad' },
  { key: 'duration', value: '2023 — 2027' },
  { key: 'cgpa', value: '8.1 / 10' },
  { key: 'school', value: 'Lord Mahavira Academy, Saharanpur (CBSE, 78.2%)' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeader path="~/about" title="A bit about me" />
      </Reveal>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <Reveal delay={80}>
          <p className="text-[15px] leading-7 text-muted sm:text-base">
            I'm a full-stack developer who likes building things end-to-end — from an
            authenticated REST API to the interface that consumes it. Most of my recent
            work sits at the intersection of{' '}
            <span className="text-paper">React/Next.js on the front</span> and{' '}
            <span className="text-paper">Node.js, Express and MongoDB on the back</span>,
            with a habit of over-engineering the data-integrity parts (ask me about atomic
            ledger writes). Outside of project work, I compete on LeetCode and CodeChef and
            have led development for two internal 36-hour hackathons.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-cyan/30">
            <p className="mb-3 font-mono text-xs text-muted">education.config</p>
            <dl className="space-y-2.5">
              {config.map((c) => (
                <div key={c.key} className="flex gap-3 font-mono text-[13px]">
                  <dt className="shrink-0 text-cyan">{c.key}:</dt>
                  <dd className="text-paper/90">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
