import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Workana MVP",
  description: "Plataforma freelance",
}

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Proyectos" },
  { href: "/sprint-3", label: "Sprint 3" },
  { href: "/sprint-4", label: "Sprint 4" },
  { href: "/sprint-5", label: "Sprint 5" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full bg-slate-950 text-slate-100 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-xl font-semibold tracking-tight text-white">
              Workana MVP
            </Link>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="min-h-[calc(100vh-72px)]">{children}</main>
      </body>
    </html>
  )
}
