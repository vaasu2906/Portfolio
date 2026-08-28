import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const commits = [
  {
    hash: 'a1c9e2f',
    msg: 'Led development for two internal hackathons as primary developer',
    detail: 'Managed cross-functional teams of 4, shipping working prototypes within 36-hour constraints.',
  },
  {
    hash: '7fd3b41',
    msg: 'Crossed 1650+ contest rating on LeetCode',
    detail: 'Ranked in the top percentage of global participants through consistent weekly/bi-weekly contests.',
  },
  {
    hash: '2e08c9a',
    msg: 'Solved 450+ DSA problems',
    detail: '350+ on LeetCode, 100+ on CodeChef — strong C++ and problem-solving fundamentals.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeader path="~/achievements" title="Git log" />
      </Reveal>
      <div className="space-y-0">
        {commits.map((c, i) => (
          <Reveal key={c.hash} delay={i * 120}>
            <div className="relative flex gap-4 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-amber bg-ink" />
                {i < commits.length - 1 && <span className="w-px flex-1 bg-line" />}
              </div>
              <div className="pb-2">
                <div className="mb-1 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-cyan">{c.hash}</span>
                  <span className="text-muted">commit</span>
                </div>
                <p className="font-display text-[15px] font-medium text-paper">{c.msg}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{c.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
