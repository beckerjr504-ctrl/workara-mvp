export default function Sprint5Page() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Sprint 5</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Pulido visual y deployment</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          En Sprint 5 finalizaremos el estilo visual y dejaremos el proyecto listo para desplegar en Vercel.
        </p>
        <div className="mt-10 space-y-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Meta</h2>
            <p className="mt-3 text-slate-400">Asegurar una apariencia consistente y experiencia premium en todas las páginas.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Diseño</h3>
              <p className="mt-3 text-slate-400">Ajustar tipografía, colores y componentes para un resultado profesional.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Deploy</h3>
              <p className="mt-3 text-slate-400">Preparar la app para producción en Vercel con el mejor flujo de entrega.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
