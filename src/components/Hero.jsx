import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap, Wand2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-[#0b0d12] via-[#0b0f14] to-[#0b0d12] text-slate-100">
      {/* Accent glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.25),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-2xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-14 md:py-28">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium tracking-wide text-teal-300">
              <Zap className="h-3.5 w-3.5" />
              SaaS • Marketing OS
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              The modern way to plan, launch, and scale digital marketing.
            </h1>
            <p className="text-pretty text-slate-300/80 md:text-lg">
              A clean, fast marketing workspace for campaigns, content, and analytics. Minimal UI, smooth motion, clear results.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-[0_10px_30px_-10px_rgba(20,184,166,0.7)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(20,184,166,0.6)]"
              >
                <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                Get started
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/40 px-5 py-2.5 text-sm text-slate-200 hover:border-slate-600"
              >
                <Wand2 className="h-4 w-4" />
                Book a demo
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 h-[420px] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_-20px_rgba(0,0,0,0.6)] md:h-[540px]"
        >
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Subtle top gradient to blend with page; doesn't block pointer events */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b0d12] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
