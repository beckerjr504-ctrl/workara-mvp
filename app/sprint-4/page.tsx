export default function Sprint4Page() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Sprint 4</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Sistema de postulación y matching</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          En Sprint 4 implementaremos el flujo de postulación entre empresas y freelancers, con coincidencias inteligentes.
        </p>
        <div className="mt-10 space-y-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Objetivo</h2>
            <p className="mt-3 text-slate-400">Permitir que las empresas reciban candidaturas y que los freelancers postulen a proyectos relevantes.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Matching</h3>
              <p className="mt-3 text-slate-400">Capturar criterios clave para emparejar mejores candidatos con cada proyecto.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Experiencia</h3>
              <p className="mt-3 text-slate-400">Una interfaz clara para manejar ofertas, postulaciones y conversaciones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
