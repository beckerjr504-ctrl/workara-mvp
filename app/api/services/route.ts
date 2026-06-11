import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const services = await prisma.service.findMany({
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(services)
}

export async function POST(req: Request) {
  const { title, description, price, category, userId } = await req.json()

  if (!title || !description || !price || !category || !userId) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
  }

  const service = await prisma.service.create({
    data: { title, description, price, category, userId },
  })

  return NextResponse.json(service, { status: 201 })
}
