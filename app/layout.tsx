import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "Workana MVP",
  description: "Plataforma freelance",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        <Navbar />
        <main className="px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  )
}
