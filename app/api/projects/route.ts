import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const projects = await prisma.project.findMany({
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(projects)
}

export async function POST(req: Request) {
  const { title, description, budget, category, userId } = await req.json()

  if (!title || !description || !budget || !category || !userId) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
  }

  const project = await prisma.project.create({
    data: { title, description, budget, category, userId },
  })

  return NextResponse.json(project, { status: 201 })
}