import express from "express";
import * as contactController from "../controllers/contact.controllers";

const router = express.Router();

router.post("/", contactController.postCreateContact);
router.patch("/:id", contactController.patchUpdateContact);
router.get("/", contactController.getContacts);
router.get("/:id", contactController.getContact);
router.delete("/:id", contactController.deleteRemoveContact);

export default router;