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
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Sprint 2</p>
              <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Proyectos disponibles</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Un panel profesional para ver y publicar proyectos con un estilo coherente y moderno.
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {showForm ? "Cerrar formulario" : "+ Publicar proyecto"}
            </button>
          </div>
        </div>

        {success && <p className="mb-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-emerald-200">{success}</p>}

        {showForm && (
          <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Nuevo proyecto</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <input
                name="title"
                placeholder="Título del proyecto"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
              <textarea
                name="description"
                placeholder="Descripción"
                rows={4}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
              <div className="grid gap-5 lg:grid-cols-3">
                <input
                  name="budget"
                  type="number"
                  placeholder="Presupuesto (USD)"
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
                <input
                  name="category"
                  placeholder="Categoría"
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
                <input
                  name="userId"
                  placeholder="ID de usuario"
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </div>
              {error && <p className="text-sm text-rose-400">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-3xl bg-cyan-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Publicar proyecto
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-6">
          {projects.length === 0 && (
            <p className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-14 text-center text-slate-400">
              No hay proyectos publicados aún.
            </p>
          )}
          {projects.map((project) => (
            <article key={project.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-2 text-sm text-slate-400">{project.category} · Publicado por {project.user?.name}</p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-slate-950/80 px-4 py-2 text-sm text-slate-200">
                  <span className="font-semibold text-cyan-300">${project.budget}</span>
                  <span>USD</span>
                </div>
              </div>
              <p className="mt-5 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200">{project.status}</span>
                <span className="text-slate-500">Publicado el {new Date(project.createdAt).toLocaleDateString("es-ES")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
