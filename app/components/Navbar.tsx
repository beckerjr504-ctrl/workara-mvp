"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 px-8 py-4 shadow-xl shadow-black/20">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-300">Workana MVP</Link>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/projects" className="hover:text-white transition">Proyectos</Link>
          <Link href="/services" className="hover:text-white transition">Servicios</Link>
          <Link href="/applications" className="hover:text-white transition">Postulaciones</Link>
        </div>
      </div>
    </nav>
  )
}
