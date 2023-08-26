import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { Contact } from "@prisma/client";
import prisma from "../db/prisma";

export function createContact(contact: ICreateContact){
    return prisma.contact.create({
        data: contact
    })
}

export function updateContact(id:string, contact: IContact){
    return prisma.contact.update({
        where: {
            id
        },
        data: contact
    })
}

export function getContact(id:string){
    return prisma.contact.findUnique({
        where: {
            id
        }
    })
}

export function getAllContacts(){
    return prisma.contact.findMany();
}

export function deleteContact(id:string){
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

