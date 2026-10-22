import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * The database is OPTIONAL — the contact form works without it (enquiries
 * are delivered by email). When DATABASE_URL is provided (e.g. local
 * development or a hosted Postgres/SQLite), submissions are stored as a
 * backup copy as well.
 */
function createClient(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null
  try {
    return globalForPrisma.prisma ?? new PrismaClient({ log: ['error'] })
  } catch {
    return null
  }
}

export const db = createClient()

if (process.env.NODE_ENV !== 'production' && db) globalForPrisma.prisma = db
