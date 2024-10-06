"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openAIService_1 = __importDefault(require("./openAIService"));
const zodFormats_1 = __importDefault(require("./zodFormats"));
/* Functions available
*/
//AIService.validateAPIKey();
const input = "teach me about nuclear physics, please be concise";
const promptData = {
    prompt: "five questions relating to: Introduction to programming using processing",
    model: "gpt-4o-mini",
    response_schema: zodFormats_1.default.vivaQuestions
};
openAIService_1.default.constructPrompt(promptData);
