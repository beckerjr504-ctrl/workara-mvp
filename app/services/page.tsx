"use client"
import { useState, useEffect } from "react"

interface Service {
  id: string
  title: string
  description: string
  price: number
  category: string
  user: { name: string; email: string }
  createdAt: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then(setServices)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const title = (form.elements.namedItem("title") as HTMLInputElement).value
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value
    const price = (form.elements.namedItem("price") as HTMLInputElement).value
    const category = (form.elements.namedItem("category") as HTMLInputElement).value
    const userId = (form.elements.namedItem("userId") as HTMLInputElement).value

    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, price: parseFloat(price), category, userId }),
    })

    if (res.ok) {
      const newService = await res.json()
      setServices([newService, ...services])
      setSuccess("¡Servicio publicado!")
      setShowForm(false)
      form.reset()
    } else {
      const data = await res.json()
      setError(data.error || "Error al publicar")
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Servicios de freelancers</h1>
              <p className="mt-2 text-slate-400">Ofrece servicios con un perfil atractivo y claro para clientes exigentes.</p>
            </div>
            <button onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              + Ofrecer servicio
            </button>
          </div>
        </div>

        {success && <p className="text-emerald-400 mb-4">{success}</p>}
        {error && <p className="text-rose-400 mb-4">{error}</p>}

        {showForm && (
          <div className="rounded-[1.75rem] border border-slate-800/70 bg-slate-950/80 p-6 shadow-lg shadow-black/20 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Nuevo servicio</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="title" placeholder="Título del servicio"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <textarea name="description" placeholder="Descripción del servicio"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" rows={3} required />
              <input name="price" type="number" placeholder="Precio (USD)"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <input name="category" placeholder="Categoría (ej: Diseño, Desarrollo)"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <input name="userId" placeholder="Tu ID de usuario"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20" required />
              <button type="submit"
                className="w-full rounded-3xl bg-emerald-500 text-slate-950 py-3 font-semibold transition hover:bg-emerald-400">
                Publicar servicio
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-6">
          {services.length === 0 && (
            <p className="text-slate-400 text-center py-12">No hay servicios publicados aún.</p>
          )}
          {services.map((service) => (
            <div key={service.id} className="rounded-[1.75rem] border border-slate-800/70 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {service.category} · Ofrecido por {service.user?.name}
                  </p>
                </div>
                <span className="rounded-full bg-amber-100 text-amber-700 px-3 py-1 text-sm font-medium">
                  ${service.price} USD
                </span>
              </div>
              <p className="text-slate-300 mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
