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
const openai_1 = require("openai");
const zod_1 = require("openai/helpers/zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
function constructPrompt(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield openai.chat.completions.create({
                model: input.model,
                messages: [
                    { role: "user", content: input.prompt },
                ],
                response_format: (0, zod_1.zodResponseFormat)(input.response_schema, "event"),
            });
            console.log(response.choices[0].message);
            return response.choices[0].message;
        }
        catch (error) {
            console.error("Error:", error);
            return "error";
        }
    });
}
function validateAPIKey() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield openai.models.list();
            return true;
        }
        catch (error) {
            return false;
        }
    });
}
function availableModels() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield openai.models.list();
        }
        catch (error) {
            return [];
        }
    });
}
const AIutils = {
    availableModels,
    validateAPIKey,
    constructPrompt
};
exports.default = AIutils;
