import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Campaigns from './components/Campaigns.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 antialiased">
      <Hero />

      <main className="relative z-10">
        <Skills />
        <Campaigns />
        <Projects />
      </main>

      <footer className="relative z-10 mt-20 border-t border-slate-200/60 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Digital Marketing Portfolio — crafted with passion and precision.
        </div>
      </footer>
    </div>
  );
}

export default App;
