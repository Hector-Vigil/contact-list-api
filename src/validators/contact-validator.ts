import { PrismaClient, Prisma, Contact } from '@prisma/client'
import { assert, object, string, size, nullable,optional, regexp,pattern } from 'superstruct'

const prisma = new PrismaClient()

export const CreateContactSS = object({
  name: size(string(), 2, 20),
  bio: size(string(), 5, 50),
  phone: pattern(string(),/^[0-9]*$/),
  photoUrl: nullable(optional(string())),
})

export const ContactSS = object({
  id: size(string(),36),
  name: size(string(), 2, 20),
  bio: size(string(), 5, 50),
  phone: pattern(string(),/^[0-9]*$/),
  photoUrl: nullable(optional(string())),
})

export const Uuid = size(string(),36)