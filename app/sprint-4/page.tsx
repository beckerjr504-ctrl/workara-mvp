export default function Sprint4Page() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Sprint 4</p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Sistema de postulación y matching entre empresas y freelancers
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Creamos un flujo inteligente para conectar proyectos con talento compatible y facilitar el proceso de postular, revisar y seleccionar candidatos.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 px-6 py-5 text-slate-300 ring-1 ring-slate-700/70">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Enfoque</p>
              <p className="mt-2 text-3xl font-semibold text-white">Matching eficiente</p>
              <p className="mt-1 text-sm text-slate-400">Candidaturas con mejor afinidad para cada oferta.</p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">Objetivos</h2>
                <p className="mt-3 text-slate-400">
                  Diseñar una experiencia clara para que empresas reciban postulaciones y freelancers encuentren proyectos relevantes.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">Resultado esperado</h2>
                <p className="mt-3 text-slate-400">
                  Un circuito visual desde publicar una oferta hasta seleccionar al candidato ideal.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Oferta</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Diseño UI/UX</h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-200">Alta afinidad</span>
                </div>
                <p className="mt-4 text-slate-400">
                  Las empresas publican requisitos, y el sistema destaca freelances con skills y valoraciones relevantes.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-400">
                  <p>• Filtro por experiencia y categoría</p>
                  <p>• Vista previa de postulaciones</p>
                  <p>• Métricas de compatibilidad</p>
                </div>
              </article>
              <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Freelancer</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Postulación rápida</h3>
                  </div>
                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-200">Búsqueda ideal</span>
                </div>
                <p className="mt-4 text-slate-400">
                  Los freelancers pueden postular con un perfil y mensajes predefinidos para cada proyecto.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-400">
                  <p>• Resumen de habilidades clave</p>
                  <p>• Ejemplos de trabajos anteriores</p>
                  <p>• Mensajes de candidatura instantánea</p>
                </div>
              </article>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Flujo de matching</h2>
              <ol className="mt-4 space-y-3 text-slate-400">
                <li className="rounded-3xl bg-slate-950/70 px-4 py-3">1. La empresa publica un proyecto con criterios claros.</li>
                <li className="rounded-3xl bg-slate-950/70 px-4 py-3">2. El sistema sugiere freelancers con skills relevantes.</li>
                <li className="rounded-3xl bg-slate-950/70 px-4 py-3">3. El freelancer postula y la empresa revisa con calificación de coincidencia.</li>
                <li className="rounded-3xl bg-slate-950/70 px-4 py-3">4. Se inicia la conversación y se firma el contrato.</li>
              </ol>
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Panel de matching</h2>
              <p className="mt-3 text-slate-400">
                Un espacio para ver candidatos destacados, proyectar coincidencias y avanzar rápidamente en cada proyecto.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Beneficios</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                <li>Más respuestas relevantes.</li>
                <li>Menos tiempo buscando talento.</li>
                <li>Mejor calidad en las postulaciones.</li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ready para construir</p>
              <p className="mt-3 text-lg font-semibold text-white">El sprint 4 une empresas y talento con matching operativo.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
