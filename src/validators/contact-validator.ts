import { PrismaClient, Prisma, Contact } from '@prisma/client'
import { assert, object, string, size, optional, nullable, any ,pattern } from 'superstruct'

const prisma = new PrismaClient()

export const CreateContactSS = object({
  name: size(string(), 2, 20),
  bio: size(string(), 5, 50),
  phone: pattern(string(),/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g),
  photoUrL: optional(string()),
})

export const ContactSS = object({
  id: size(string(),36),
  name: size(string(), 2, 20),
  bio: size(string(), 5, 50),
  phone: pattern(string(),/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g),
  photoUrL: optional(string()),
})

export const Uuid = size(string(),36)