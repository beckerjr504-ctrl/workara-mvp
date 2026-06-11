export default function Sprint3Page() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Sprint 3</p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Freelancers ofreciendo servicios profesionales
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Diseñamos un panel para mostrar talento independiente, servicios destacados y métricas clave que ayudan a los clientes a elegir con confianza.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 px-6 py-5 text-slate-300 ring-1 ring-slate-700/70">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Meta del sprint</p>
              <p className="mt-2 text-3xl font-semibold text-white">Marketplace de freelancers</p>
              <p className="mt-1 text-sm text-slate-400">Listados, servicios y confianza visual.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">Resumen</h2>
                <p className="mt-3 text-slate-400">
                  Presentamos una colección de freelancers con foto, experiencia, servicios y precios recomendados.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">Valor</h2>
                <p className="mt-3 text-slate-400">
                  Una interfaz clara donde los clientes encuentran talento rápido y los profesionales muestran su oferta de manera confiable.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {[
                {
                  name: "Lucía Pérez",
                  role: "Diseñadora UX/UI",
                  rating: "4.9",
                  projects: "120 proyectos",
                  services: ["Rediseño web", "Prototipos", "Branding"],
                },
                {
                  name: "Mateo Rojas",
                  role: "Desarrollador Full Stack",
                  rating: "4.8",
                  projects: "86 proyectos",
                  services: ["Apps web", "APIs Node", "Integraciones"],
                },
              ].map((freelancer) => (
                <article key={freelancer.name} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/15 text-2xl text-cyan-300">
                      {freelancer.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{freelancer.name}</h3>
                      <p className="text-sm text-slate-400">{freelancer.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="rounded-full bg-slate-950/70 px-3 py-1">{freelancer.rating} ★</span>
                    <span className="rounded-full bg-slate-950/70 px-3 py-1">{freelancer.projects}</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {freelancer.services.map((service) => (
                      <div key={service} className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300">
                        {service}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                    Ver servicios
                  </button>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Destacado del sprint</h2>
              <p className="mt-3 text-slate-400">
                Creamos un espacio donde cada freelancer puede destacar servicios clave, resultados y opiniones de clientes.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Funciones pensadas</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                <li>Filtrado por categoría y experiencia</li>
                <li>Tarjetas de servicio con precio fijo y tiempo estimado</li>
                <li>Enlaces directos para contratar o enviar mensaje</li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Resultado</p>
              <p className="mt-3 text-lg font-semibold text-white">Un marketplace profesional para servicios freelance.</p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
