"use client"
import { useState, useEffect } from "react"

interface Application {
  id: string
  message: string
  status: string
  user: { name: string; email: string }
  project: { title: string; budget: number }
  createdAt: string
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadApplications() {
      try {
        const res = await fetch("/api/applications")
        const contentType = res.headers.get("content-type") || ""
        const text = await res.text()

        if (!res.ok) {
          throw new Error(text || `Error ${res.status}`)
        }

        if (!text) {
          setApplications([])
          return
        }

        if (!contentType.includes("application/json")) {
          throw new Error(text || "Respuesta inválida del servidor")
        }

        const data = JSON.parse(text)
        setApplications(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    loadApplications()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/70">Postulaciones</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Tus aplicaciones recientes</h1>
            <p className="mt-3 text-slate-400">Revisa el estado de cada postulación con un diseño claro y sofisticado.</p>
          </div>

          <div className="space-y-4">
            {error ? (
              <p className="text-rose-400 text-center py-12">{error}</p>
            ) : applications.length === 0 ? (
              <p className="text-slate-400 text-center py-12">No hay postulaciones aún.</p>
            ) : null}

            {applications.map((app) => (
              <div key={app.id} className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{app.project?.title}</h2>
                    <p className="text-slate-400 text-sm mt-1">Postulado por {app.user?.name}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    app.status === "PENDING" ? "bg-amber-100 text-amber-700" :
                    app.status === "ACCEPTED" ? "bg-emerald-100 text-emerald-700" :
                    "bg-rose-100 text-rose-700"
                  }`}>
                    {app.status}
                  </span>
                </div>
                <p className="text-slate-300 mt-3">{app.message}</p>
                <p className="text-emerald-300 font-medium mt-2">${app.project?.budget} USD</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
