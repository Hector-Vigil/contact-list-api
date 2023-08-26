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
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const prisma_1 = __importDefault(require("./db/prisma"));
dotenv_1.default.config();
const port = process.env.PORT || 8000;
app_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield prisma_1.default.contact.findMany();
    const names = contacts.map((contact) => contact.name);
    res.send(`There are ${names.length} users with the names of: ${names.join(", ")}`);
}));
app_1.default.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
