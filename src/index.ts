import dotenv from 'dotenv';
import { Request, Response } from 'express';
import app from "./app"
import prisma from "./db/prisma";
import contactRoutes from "./routes/contacts.routes";

dotenv.config();

const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  const contacts = await prisma.contact.findMany();

  const names = contacts.map((contact: any)=>contact.name)
  res.send(`There are ${names.length} users with the names of: ${names.join(", ")}`)
});

app.use("/contacts", contactRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});