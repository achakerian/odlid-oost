"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openAIService_1 = __importDefault(require("./openAIService"));
const zodSchemas_1 = __importDefault(require("./zodSchemas"));
/* Functions available
*/
const val = openAIService_1.default.availableModels();
val.then(models => {
    console.log(models); // Prints the resolved value
});
const input = "teach me about nuclear physics, please be concise";
const promptData = {
    prompt: "five questions relating to: Introduction to programming using processing",
    model: "gpt-4o-mini",
    response_schema: zodSchemas_1.default.vivaQuestions
};
//AIService.constructPrompt(promptData);
