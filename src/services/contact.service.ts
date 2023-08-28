import { IContact, ICreateContact } from "../interfaces/contact.interface";
import prisma from "../db/prisma";
import { assert, object, string, size, refine, regexp,pattern } from 'superstruct'
import { CreateContactSS, ContactSS, Uuid } from "../validators/contact-validator";

export function createContact(contact: ICreateContact){
  assert(contact, CreateContactSS)
  return prisma.contact.create({
      data: contact
  })
}

export function updateContact(id:string, contact: IContact){
  assert(contact, ContactSS)
  return prisma.contact.update({
      where: {
          id
      },
      data: contact
  })
}

export function findUniqueContact(id:string){
  assert(id, Uuid)
  return prisma.contact.findUnique({
      where: {
          id
      }
  })
}

export function findAllContacts(){
    return prisma.contact.findMany();
}

export function deleteContact(id:string){
  assert(id, Uuid)
  return prisma.contact.delete({
      where: {
          id
      }
  })
}

export function searchContact(value:string){
    return prisma.contact.findMany({
        where: {
          OR: [
            {
              name: {
                contains: value,
                mode: 'insensitive',
              },
            },
            {
              phone: {
                contains: value,
              },
            },
            {
              bio: {
                contains: value,
                mode: 'insensitive',
              },
            },
          ],
        },
      })
}

