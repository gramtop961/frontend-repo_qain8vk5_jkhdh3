import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    name: 'NeoPay Launch System',
    tags: ['Go-to-Market', 'Paid Social', 'Landing'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'B2B Demand Loop',
    tags: ['ABM', 'Content', 'Automation'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1529336953121-ad43b1c065c5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'CRO Playbook v2',
    tags: ['Experimentation', 'CRO', 'Analytics'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1523247610870-b8812a288fcc?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected work</h2>
        <p className="mt-3 text-slate-300/80">A mix of live builds, explorations, and experiments with measurable impact.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group relative block overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_40px_-18px_rgba(0,0,0,0.6)]"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img src={p.cover} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
            <div className="flex items-center justify-between gap-3 p-5">
              <div>
                <h3 className="text-white">{p.name}</h3>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-300/70">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-slate-700/70 bg-slate-800/40 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-teal-300">
                <Play className="h-4 w-4" />
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
            <div className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(20,184,166,0.08), transparent 40%)' }} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
