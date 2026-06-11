"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const password = (form.elements.namedItem("password") as HTMLInputElement).value
    const role = (form.elements.namedItem("role") as HTMLSelectElement).value

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    })

    if (res.ok) router.push("/login")
    else {
      const data = await res.json()
      setError(data.error || "Error al registrarse")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-6">Crear cuenta</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Nombre completo"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
          <input name="email" type="email" placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
          <input name="password" type="password" placeholder="Contraseña"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
          <select name="role"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="FREELANCER">Freelancer</option>
            <option value="EMPRESA">Empresa</option>
          </select>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-sm text-center">¿Ya tienes cuenta? <a href="/login" className="text-green-600 font-medium">Inicia sesión</a></p>
      </div>
    </div>
  )
}