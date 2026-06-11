"use client"
import Link from "next/link"
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
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.9fr] items-center">
        <section className="space-y-6 text-slate-100">
          <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-1 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-500/20">
            Sprint 2 · Registro profesional
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Crea tu cuenta con confianza.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Onboarding moderno para freelancers y empresas con una experiencia más pulida.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800/70 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Claridad</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Formulario intuitivo y fácil de completar.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/70 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Seguridad</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Diseño confiable para cada usuario.</p>
            </div>
          </div>
        </section>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Registro</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Únete a la plataforma</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Nombre completo</span>
              <input
                name="name"
                type="text"
                placeholder="Ej. Ana Pérez"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                required
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Correo electrónico</span>
              <input
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                required
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Contraseña</span>
              <input
                name="password"
                type="password"
                placeholder="Contraseña segura"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                required
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Rol</span>
              <select
                name="role"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              >
                <option value="FREELANCER">Freelancer</option>
                <option value="EMPRESA">Empresa</option>
              </select>
            </label>
            {error && <p className="text-sm text-rose-400">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-3xl bg-emerald-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald-400"
            >
              Crear cuenta
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-400">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="font-semibold text-white hover:text-emerald-300">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
