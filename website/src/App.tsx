import { motion } from 'motion/react';
import { Check, Copy, Download, Lock, Monitor, ShieldCheck, Sparkles } from 'lucide-react';

const downloadHref = '/downloads/PasteClean_0.1.0_x64-setup.exe';

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="PasteClean home">
      <div className="relative flex h-7 w-7 items-center justify-center">
        <div className="absolute h-full w-full rotate-45 rounded-sm border-2 border-white" />
        <div className="absolute h-2.5 w-2.5 rotate-45 rounded-[1px] bg-white" />
      </div>
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">PasteClean</span>
    </a>
  );
}

function DownloadButton({
  className = '',
  tone = 'light',
}: {
  className?: string;
  tone?: 'light' | 'dark';
}) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-black text-white hover:bg-zinc-800 focus:ring-black focus:ring-offset-white'
      : 'bg-white text-black hover:bg-zinc-200 focus:ring-white focus:ring-offset-black';

  return (
    <a
      href={downloadHref}
      download
      className={`inline-flex items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${toneClasses} ${className}`}
    >
      <Download className="h-4 w-4" />
      Download for Windows
    </a>
  );
}

function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-5xl" aria-label="PasteClean app preview">
      <div className="absolute inset-12 rounded-full bg-white/5 blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative overflow-hidden rounded-lg border border-white/10 bg-[#111] shadow-2xl shadow-black/60"
      >
        <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#202020] px-4">
          <div className="h-2.5 w-2.5 rounded-full border border-red-400/50 bg-red-500/20" />
          <div className="h-2.5 w-2.5 rounded-full border border-yellow-400/50 bg-yellow-500/20" />
          <div className="h-2.5 w-2.5 rounded-full border border-emerald-400/50 bg-emerald-500/20" />
          <div className="min-w-0 flex-1 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            PasteClean
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#050505] px-5 py-16 text-center sm:px-10 sm:py-20">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Strip the noise.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
            Paste a messy URL, remove tracking parameters, and copy the clean version.
          </p>

          <div className="mt-12 w-full max-w-2xl rounded-md border border-white/10 bg-white/[0.04] p-5 text-left shadow-lg sm:p-6">
            <div className="min-h-28 rounded border border-white/10 bg-black/40 p-4 font-mono text-sm leading-6 text-slate-500">
              https://shop.com/item?id=123&utm_source=email&fbclid=ABC123
            </div>
            <div className="mt-4 flex justify-end">
              <button className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black">Clean Link</button>
            </div>
          </div>

          <div className="mt-6 w-full max-w-2xl rounded-md border border-emerald-400/20 bg-emerald-400/[0.06] p-4 text-left">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              <Check className="h-4 w-4" />
              Cleaned URL
            </div>
            <div className="break-all font-mono text-sm leading-6 text-slate-200">https://shop.com/item?id=123</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: 'Local by design',
    desc: 'PasteClean runs on your Windows PC. Your links are cleaned on-device and do not need an account or server.',
  },
  {
    icon: Sparkles,
    title: 'Removes common trackers',
    desc: 'Strips UTMs, click IDs, and common ad/social parameters while keeping useful URL details like product IDs.',
  },
  {
    icon: Copy,
    title: 'Manual, predictable flow',
    desc: 'Paste a link, clean it, copy the result. No background clipboard watching or surprise edits.',
  },
  {
    icon: Monitor,
    title: 'Native Windows app',
    desc: 'Packaged as a standalone Tauri desktop app with a normal Windows setup installer.',
  },
];

const removedParams = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'igshid',
  '_gl',
  'msclkid',
  'mc_eid',
  'yclid',
  'ref_src',
  'click_id',
];

export default function App() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#050505] text-slate-200 selection:bg-white/20">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-5 border-b border-white/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Logo />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#privacy" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#download" className="border-b border-white/50 pb-1 text-white">
            Download
          </a>
        </div>
      </nav>

      <main>
        <section className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-24 pt-20 text-center sm:px-8 lg:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500"
          >
            Free Windows link cleaner
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Clean tracking junk from links before you share them.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            PasteClean removes UTMs, click IDs, and social tracking parameters from URLs. It is simple, manual, local, and built for Windows.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <DownloadButton />
            <a
              href="#features"
              className="rounded-md px-6 py-3 text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              See what it removes
            </a>
          </motion.div>
        </section>

        <section className="px-5 pb-24 sm:px-8">
          <AppMockup />
        </section>

        <section id="features" className="border-t border-white/10 px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built for one quiet job.</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
                PasteClean does not try to manage your browser or watch everything you copy. It gives you a fast desktop tool for cleaning a link when you choose.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                    <Icon className="mb-5 h-6 w-6 text-white" />
                    <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="privacy" className="border-t border-white/10 px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                <Lock className="h-4 w-4" />
                Zero logs
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Your URLs stay on your machine.</h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                The current PasteClean app is fully local. There is no account, cloud sync, analytics dashboard, or server-side URL processing.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#101010] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Common parameters removed</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {removedParams.map((param) => (
                  <span key={param} className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-slate-300">
                    {param}
                  </span>
                ))}
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-slate-300">
                  any utm_*
                </span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-slate-300">
                  any *clid
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="border-t border-white/10 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-white p-8 text-center text-black shadow-2xl shadow-white/10 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">PasteClean 0.1.0</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Download the Windows installer.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600">
              Install PasteClean on your PC and use it as a standalone desktop app whenever you need a cleaner link.
            </p>
            <DownloadButton tone="dark" className="mt-8" />
            <p className="mt-4 text-xs text-zinc-500">Windows x64 setup installer</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs uppercase tracking-[0.22em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>PasteClean 0.1.0 - Windows</div>
          <div>Local link cleaning. No account required.</div>
        </div>
      </footer>
    </div>
  );
}
