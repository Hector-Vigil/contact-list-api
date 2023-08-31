import dotenv from 'dotenv';
import { Request, Response } from 'express';
import app from "./app"
import prisma from "./db/prisma";
import contactRoutes from "./routes/contacts.routes";
import cors from "cors";
import {
  errorHandlerMiddleware,
  handleError,
  isTrustedError,
} from "./utils/error-handler";
import fileUpload from 'express-fileupload';

dotenv.config();

const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  const contacts = await prisma.contact.findMany();

  const names = contacts.map((contact: any)=>contact.name)
  res.send(`There are ${names.length} users with the names of: ${names.join(", ")}`)
});

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use("/contacts", contactRoutes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(errorHandlerMiddleware);

process.on("uncaughtException", async (error: Error) => {
  handleError(error);
  if (!isTrustedError(error)) process.exit(1);
});

process.on("unhandledRejection", (reason: Error) => {
  throw reason;
});