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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">Proyectos disponibles</h1>
          <button onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            + Publicar proyecto
          </button>
        </div>

        {success && <p className="text-green-600 mb-4">{success}</p>}

        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Nuevo proyecto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="title" placeholder="Título del proyecto"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <textarea name="description" placeholder="Descripción"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" rows={3} required />
              <input name="budget" type="number" placeholder="Presupuesto (USD)"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <input name="category" placeholder="Categoría (ej: Diseño, Desarrollo)"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <input name="userId" placeholder="Tu ID de usuario"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Publicar
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-4">
          {projects.length === 0 && (
            <p className="text-gray-500 text-center py-12">No hay proyectos publicados aún.</p>
          )}
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{project.category} · Publicado por {project.user?.name}</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  ${project.budget} USD
                </span>
              </div>
              <p className="text-gray-600 mt-3">{project.description}</p>
              <span className="mt-3 inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}