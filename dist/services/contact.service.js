"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchContact = exports.deleteContact = exports.findAllContacts = exports.findUniqueContact = exports.updateContact = exports.createContact = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const superstruct_1 = require("superstruct");
const contact_validator_1 = require("../validators/contact-validator");
function createContact(contact) {
    (0, superstruct_1.assert)(contact, contact_validator_1.CreateContactSS);
    return prisma_1.default.contact.create({
        data: contact
    });
}
exports.createContact = createContact;
function updateContact(id, contact) {
    (0, superstruct_1.assert)(contact, contact_validator_1.ContactSS);
    return prisma_1.default.contact.update({
        where: {
            id
        },
        data: contact
    });
}
exports.updateContact = updateContact;
function findUniqueContact(id) {
    (0, superstruct_1.assert)(id, contact_validator_1.Uuid);
    return prisma_1.default.contact.findUnique({
        where: {
            id
        }
    });
}
exports.findUniqueContact = findUniqueContact;
function findAllContacts() {
    return prisma_1.default.contact.findMany();
}
exports.findAllContacts = findAllContacts;
function deleteContact(id) {
    (0, superstruct_1.assert)(id, contact_validator_1.Uuid);
    return prisma_1.default.contact.delete({
        where: {
            id
        }
    });
}
exports.deleteContact = deleteContact;
function searchContact(value) {
    return prisma_1.default.contact.findMany({
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
    });
}
exports.searchContact = searchContact;
