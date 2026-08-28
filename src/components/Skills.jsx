import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const groups = [
  {
    label: 'languages & fundamentals',
    items: ['C++', 'C', 'JavaScript', 'SQL', 'DSA', 'OS', 'DBMS', 'OOPS'],
  },
  {
    label: 'frontend',
    items: ['React.js', 'Next.js', 'HTML5/CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Bcrypt', 'REST APIs'],
  },
  {
    label: 'tools',
    items: ['Git', 'GitHub', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeader path="~/skills" title="Toolbox" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 90}>
            <div className="h-full rounded-lg border border-line bg-surface p-5 transition-colors hover:border-amber/30">
              <p className="mb-3 font-mono text-xs text-amber">// {g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-[12px] text-paper/90 transition-colors hover:border-cyan/40 hover:text-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
