import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/70">Panel principal</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Bienvenido a Workana</h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Navega tus proyectos, servicios y postulaciones con una experiencia profesional y elegante.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/projects" className="group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.65)]">
            <div className="text-3xl mb-4">📋</div>
            <h2 className="text-xl font-semibold text-white">Proyectos</h2>
            <p className="mt-2 text-slate-400 text-sm">Publica, gestiona y aplica a proyectos disponibles.</p>
          </Link>

          <Link href="/services" className="group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.45)]">
            <div className="text-3xl mb-4">💼</div>
            <h2 className="text-xl font-semibold text-white">Servicios</h2>
            <p className="mt-2 text-slate-400 text-sm">Ofrece tus servicios y destaca como profesional independiente.</p>
          </Link>

          <Link href="/applications" className="group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 transition hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-[0_20px_40px_-20px_rgba(245,158,11,0.45)]">
            <div className="text-3xl mb-4">📨</div>
            <h2 className="text-xl font-semibold text-white">Postulaciones</h2>
            <p className="mt-2 text-slate-400 text-sm">Revisa el estado de tus aplicaciones y clientes.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
