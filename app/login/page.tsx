"use client"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const password = (form.elements.namedItem("password") as HTMLInputElement).value

    const res = await signIn("credentials", { email, password, redirect: false })
    if (res?.error) setError("Credenciales incorrectas")
    else router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr] items-center">
        <section className="space-y-6 text-slate-100">
          <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-1 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-500/20">
            Sprint 1 · Autenticación
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Accede a tu espacio Workana.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Diseño profesional y experiencia confiable desde el primer paso para empresas y freelancers.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-800/70 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Para empresas</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Publica proyectos y gestiona clientes desde una interfaz profesional.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-800/70 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Para freelancers</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Conecta con oportunidades y administra tu perfil con estilo moderno.
              </p>
            </article>
          </div>
        </section>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Inicio de sesión</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Bienvenido de nuevo</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Correo electrónico</span>
              <input
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Contraseña</span>
              <input
                name="password"
                type="password"
                placeholder="Contraseña segura"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </label>
            {error && <p className="text-sm text-rose-400">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-3xl bg-cyan-500 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Entrar
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-400">
            ¿No tienes cuenta?{' '}
            <Link href="/register" className="font-semibold text-white hover:text-cyan-300">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
