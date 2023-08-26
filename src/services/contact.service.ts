import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { Contact } from "@prisma/client";
import prisma from "../db/prisma";

export function createContact(contact: ICreateContact){
    return prisma.contact.create({
        data: contact
    })
}

export function updateContact(id:number, contact: IContact){
    return prisma.contact.update({
        where: {
            id
        },
        data: contact
    })
}

export function getContact(id:number){
    return prisma.contact.findUnique({
        where: {
            id
        }
    })
}

export function getAllContacts(){
    return prisma.contact.findMany();
}

export function deleteContact(id:number){
    return prisma.contact.delete({
        where: {
            id
        }
    })
}

