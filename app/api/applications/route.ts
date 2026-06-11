import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const applications = await prisma.application.findMany({
    include: {
      user: { select: { name: true, email: true } },
      project: { select: { title: true, budget: true } },
    },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(applications)
}

export async function POST(req: Request) {
  const { message, userId, projectId } = await req.json()

  if (!message || !userId || !projectId) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
  }

  const existing = await prisma.application.findFirst({
    where: { userId, projectId },
  })

  if (existing) {
    return NextResponse.json({ error: "Ya postulaste a este proyecto" }, { status: 400 })
  }

  const application = await prisma.application.create({
    data: { message, userId, projectId },
  })

  return NextResponse.json(application, { status: 201 })
}
