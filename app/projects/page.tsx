"use client"
import { useState, useEffect } from "react"

interface Project {
  id: string
  title: string
  description: string
  budget: number
  category: string
  status: string
  user: { name: string; email: string }
  createdAt: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [showForm, setShowForm] = useState(false)
  const [applyingTo, setApplyingTo] = useState<string | null>(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects)
  }, [])

  async function handleSubmitProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const title = (form.elements.namedItem("title") as HTMLInputElement).value
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value
    const budget = (form.elements.namedItem("budget") as HTMLInputElement).value
    const category = (form.elements.namedItem("category") as HTMLInputElement).value
    const userId = (form.elements.namedItem("userId") as HTMLInputElement).value

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, budget: parseFloat(budget), category, userId }),
    })

    if (res.ok) {
      const newProject = await res.json()
      setProjects([newProject, ...projects])
      setSuccess("¡Proyecto publicado!")
      setShowForm(false)
      form.reset()
    } else {
      const data = await res.json()
      setError(data.error || "Error al publicar")
    }
  }

  async function handleApply(e: React.FormEvent<HTMLFormElement>, projectId: string) {
    e.preventDefault()
    const form = e.currentTarget
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value
    const userId = (form.elements.namedItem("userId") as HTMLInputElement).value

    const res = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, userId, projectId }),
    })

    if (res.ok) {
      setSuccess("¡Postulación enviada!")
      setApplyingTo(null)
      form.reset()
    } else {
      const data = await res.json()
      setError(data.error || "Error al postular")
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Proyectos disponibles</h1>
              <p className="mt-2 text-slate-400">Publica proyectos y encuentra candidatos con una experiencia visual madura.</p>
            </div>
            <button onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              + Publicar proyecto
            </button>
          </div>
        </div>

        {success && <p className="text-emerald-400 mb-4">{success}</p>}
        {error && <p className="text-rose-400 mb-4">{error}</p>}

        {showForm && (
          <div className="rounded-[1.75rem] border border-slate-800/70 bg-slate-950/80 p-6 shadow-lg shadow-black/20 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Nuevo proyecto</h2>
            <form onSubmit={handleSubmitProject} className="space-y-4">
              <input name="title" placeholder="Título del proyecto"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <textarea name="description" placeholder="Descripción"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" rows={3} required />
              <input name="budget" type="number" placeholder="Presupuesto (USD)"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <input name="category" placeholder="Categoría"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <input name="userId" placeholder="Tu ID de usuario"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <button type="submit"
                className="w-full rounded-3xl bg-emerald-500 text-slate-950 py-3 font-semibold transition hover:bg-emerald-400">
                Publicar
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-6">
          {projects.length === 0 && (
            <p className="text-slate-400 text-center py-12">No hay proyectos publicados aún.</p>
          )}
          {projects.map((project) => (
            <div key={project.id} className="rounded-[1.75rem] border border-slate-800/70 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {project.category} · Publicado por {project.user?.name}
                  </p>
                </div>
                <span className="rounded-full bg-amber-100 text-amber-700 px-3 py-1 text-sm font-medium">
                  ${project.budget} USD
                </span>
              </div>
              <p className="text-slate-300 mt-4">{project.description}</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                  {project.status}
                </span>
                <button onClick={() => setApplyingTo(applyingTo === project.id ? null : project.id)}
                  className="rounded-3xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Postularme
                </button>
              </div>

              {applyingTo === project.id && (
                <form onSubmit={(e) => handleApply(e, project.id)} className="mt-6 space-y-3 border-t border-slate-800 pt-5">
                  <textarea name="message" placeholder="¿Por qué eres el candidato ideal?"
                    className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" rows={3} required />
                  <input name="userId" placeholder="Tu ID de usuario"
                    className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
                  <button type="submit"
                    className="w-full rounded-3xl bg-emerald-500 text-slate-950 py-3 font-semibold transition hover:bg-emerald-400">
                    Enviar postulación
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
