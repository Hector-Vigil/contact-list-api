import { IContact, ICreateContact } from "../interfaces/contact.interface";
import prisma from "../db/prisma";
import { assert, object, string, size, refine, regexp,pattern } from 'superstruct'
import { CreateContactSS, ContactSS, Uuid } from "../validators/contact-validator";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Buffer } from "buffer";

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

export async function uploadImage(image:Buffer,filename:string){
  const s3 = new S3Client({
    endpoint: 'https://s3.us-east-005.backblazeb2.com',
    region: 'us-east-005',
  });
  const bucketName = "contacts-list-app-images";
  const keyName = new Date().toISOString()+filename;
  const bucketUrl = "https://f005.backblazeb2.com/file/contacts-list-app-images/";
  try{
    await s3.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: keyName,
      Body: image
    }));

    return {photoUrl:bucketUrl + keyName};
  } catch (err) {
    console.log("Error: ", err);
  }  
}

export function searchContacts(query?:string | string[]){
  if(!!query){
    return prisma.contact.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            phone: {
              contains: query,
            },
          },
          {
            bio: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
  } else {
    return prisma.contact.findMany();
  }

}

