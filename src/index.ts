import AIService from "./openAIService";
import format from './zodSchemas';
import z, { ZodAny, ZodType } from "zod";

/* Functions available
*/ 

//AIService.validateAPIKey();
const input = "teach me about nuclear physics, please be concise"
const promptData = {
  prompt: "five questions relating to: Introduction to programming using processing",
  model: "gpt-4o-mini",
  response_schema: format.vivaQuestions
};
AIService.constructPrompt(promptData);


