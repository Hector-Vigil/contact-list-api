import { NextFunction, Request, Response } from "express";
import { IContact, ICreateContact } from "../interfaces/contact.interface";
import {
  createContact,
  findUniqueContact,
  findAllContacts,
  deleteContact,
  updateContact,
} from "../services/contact.service";
import asyncHandler from "express-async-handler";

export const postCreateContact = asyncHandler(
  async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const payload: ICreateContact = req.body;

    const contacts = await createContact(payload);
    res.status(200).json(contacts);
  }
)

export const patchUpdateContact = asyncHandler(
  async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const payload: IContact = req.body;
    const contact = await updateContact(id, payload);
    res.status(200).json(contact);
  }
)

export const getContact = asyncHandler(
  async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const contact = await findUniqueContact(id);
    res.status(200).json(contact);
  }
)

export const getContacts = asyncHandler(
  async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const contacts = await findAllContacts();
    res.status(200).json(contacts);
  }
)

  
export const deleteRemoveContact = asyncHandler(
  async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const payload: IContact = req.body;
    const contacts = await deleteContact(id);
    res.status(200).json(contacts);
  }
)