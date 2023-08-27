import { NextFunction, Request, Response } from "express";
import { IContact, ICreateContact } from "../interfaces/contact.interface";
import {
  createContact,
  findUniqueContact,
  findAllContacts,
  deleteContact,
  updateContact,
} from "../services/contact.service";

export async function postCreateContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const payload: ICreateContact = req.body;

  const contacts = await createContact(payload);
  res.status(200).json(contacts);
}

export async function patchUpdateContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const payload: IContact = req.body;
  const contact = await updateContact(id, payload);
  res.status(200).json(contact);
}

export async function getContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const contact = await findUniqueContact(id);
  res.status(200).json(contact);
}

export async function getContacts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contacts = await findAllContacts();
  res.status(200).json(contacts);
}

  
export async function deleteRemoveContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const payload: IContact = req.body;
  const contacts = await deleteContact(id);
  res.status(200).json(contacts);
}