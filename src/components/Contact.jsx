import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

// TODO: replace with your real email address
const EMAIL = 'vasu.singhal@example.com'
const PHONE = '+91 7017641954'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Vaasu2906', tag: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vasu-singhal-9603142a3/', tag: 'linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/vasusinghal29/', tag: 'leetcode' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeader path="~/contact" title="Let's talk" />
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
          <p className="max-w-lg text-[15px] leading-7 text-muted">
            Open to internships and full-stack roles. Email is the fastest way to reach me.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              onClick={copyEmail}
              className="rounded-md border border-amber/40 bg-amber/10 px-4 py-2 text-left font-mono text-sm text-amber transition-all hover:bg-amber/20 active:scale-[0.98]"
            >
              {copied ? 'copied ✓' : EMAIL}
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-md border border-line px-4 py-2 font-mono text-sm text-paper transition-colors hover:bg-surface2"
            >
              open mail app
            </a>
            <span className="font-mono text-sm text-muted">{PHONE}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-6">
            {socials.map((s) => (
              <a
                key={s.tag}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
