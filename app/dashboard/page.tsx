export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Estado del proyecto y roadmap de sprints</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Sprint 1 y Sprint 2 están pulidos con un estilo consistente. Los próximos sprints muestran las metas futuras.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 px-6 py-5 text-slate-300 ring-1 ring-slate-700/70">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Progreso actual</p>
              <p className="mt-2 text-3xl font-semibold text-white">Sprint 2</p>
              <p className="mt-1 text-sm text-slate-400">Diseño y experiencia mejorados.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Sprint 1</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Autenticación</h2>
              <p className="mt-3 text-slate-400">Login y registro con un diseño profesional, accesible y consistente.</p>
              <span className="mt-4 inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-medium text-cyan-200">Completado</span>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Sprint 2</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Publicación de proyectos</h2>
              <p className="mt-3 text-slate-400">Listado de proyectos y formulario con una mejor experiencia de usuario.</p>
              <span className="mt-4 inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-200">Completado</span>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Sprint 3</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Freelancers</h2>
              <p className="mt-3 text-slate-400">Página de freelancers y servicios listos para implementarse.</p>
              <span className="mt-4 inline-flex rounded-full bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-200">Próximo</span>
            </article>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">Sprint 4</h3>
              <p className="mt-3 text-slate-400">Sistema de postulación y matching entre empresas y freelancers.</p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">Sprint 5</h3>
              <p className="mt-3 text-slate-400">Pulido visual final y despliegue en Vercel.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
