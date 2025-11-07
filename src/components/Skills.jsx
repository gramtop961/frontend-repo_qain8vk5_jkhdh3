import { motion } from 'framer-motion';
import { BarChart2, Megaphone, LineChart, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: BarChart2,
    title: 'Performance Marketing',
    desc: 'Full-funnel strategy across search, social, and programmatic with rigorous experimentation.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Optimization',
    desc: 'Measurement frameworks, dashboards, and CRO to scale what works and cut what doesn’t.',
  },
  {
    icon: Megaphone,
    title: 'Brand & Content',
    desc: 'Narratives that feel modern and human. Creative systems for consistency and speed.',
  },
  {
    icon: Sparkles,
    title: 'Automation & AI',
    desc: 'Workflows and tooling that unlock velocity while maintaining quality and insight.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto -mt-8 max-w-7xl px-6 py-16 text-slate-200 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Capabilities
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-gradient-to-b from-slate-900/50 to-slate-900/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_-12px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),transparent_60%)] blur-xl transition-transform duration-500 group-hover:scale-125" />
            <s.icon className="h-6 w-6 text-teal-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300/80">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
