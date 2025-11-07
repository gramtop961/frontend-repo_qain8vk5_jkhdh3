import { motion } from 'framer-motion';
import { TrendingUp, Target, MousePointerClick } from 'lucide-react';

const campaigns = [
  {
    title: 'E-commerce ROAS Lift',
    icon: TrendingUp,
    kpi: '+142% ROAS',
    desc: 'Scaled paid social with creative iteration and audience expansion across lookalikes.',
  },
  {
    title: 'B2B Lead Engine',
    icon: Target,
    kpi: '-36% CPL',
    desc: 'Multi-touch demand gen with account targeting and content syndication loops.',
  },
  {
    title: 'On-site Conversion',
    icon: MousePointerClick,
    kpi: '+28% CVR',
    desc: 'A/B tested landing patterns and improved speed, form UX, and offer clarity.',
  },
];

export default function Campaigns() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Campaign snapshots</h2>
        <p className="mt-3 text-slate-300/80">Highlights from performance and brand initiatives, distilled into outcomes.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
        {campaigns.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_40px_-18px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.18),transparent_60%)] blur-xl transition-transform duration-500 group-hover:scale-125" />
            <div className="flex items-center gap-3">
              <c.icon className="h-5 w-5 text-teal-400" />
              <h3 className="text-white">{c.title}</h3>
            </div>
            <div className="mt-6 text-2xl font-semibold text-teal-300">{c.kpi}</div>
            <p className="mt-2 text-sm text-slate-300/80">{c.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
