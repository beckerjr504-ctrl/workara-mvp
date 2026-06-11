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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">Servicios de freelancers</h1>
          <button onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            + Ofrecer servicio
          </button>
        </div>

        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Nuevo servicio</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="title" placeholder="Título del servicio"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <textarea name="description" placeholder="Descripción del servicio"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" rows={3} required />
              <input name="price" type="number" placeholder="Precio (USD)"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <input name="category" placeholder="Categoría (ej: Diseño, Desarrollo)"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              <input name="userId" placeholder="Tu ID de usuario"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Publicar servicio
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-4">
          {services.length === 0 && (
            <p className="text-gray-500 text-center py-12">No hay servicios publicados aún.</p>
          )}
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {service.category} · Ofrecido por {service.user?.name}
                  </p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  ${service.price} USD
                </span>
              </div>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
