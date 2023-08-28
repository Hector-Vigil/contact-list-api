"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRemoveContact = exports.getContacts = exports.getContact = exports.patchUpdateContact = exports.postCreateContact = void 0;
const contact_service_1 = require("../services/contact.service");
function postCreateContact(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const contacts = yield (0, contact_service_1.createContact)(payload);
        res.status(200).json(contacts);
    });
}
exports.postCreateContact = postCreateContact;
function patchUpdateContact(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const payload = req.body;
        const contact = yield (0, contact_service_1.updateContact)(id, payload);
        res.status(200).json(contact);
    });
}
exports.patchUpdateContact = patchUpdateContact;
function getContact(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const contact = yield (0, contact_service_1.findUniqueContact)(id);
        res.status(200).json(contact);
    });
}
exports.getContact = getContact;
function getContacts(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const contacts = yield (0, contact_service_1.findAllContacts)();
        res.status(200).json(contacts);
    });
}
exports.getContacts = getContacts;
function deleteRemoveContact(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const payload = req.body;
        const contacts = yield (0, contact_service_1.deleteContact)(id);
        res.status(200).json(contacts);
    });
}
exports.deleteRemoveContact = deleteRemoveContact;
