import AIService from "./openAIService";
import PromptSchemaType from './zodSchemas';
import z, { ZodAny, ZodType } from "zod";

/* Functions available
*/ 
const val = AIService.availableModels();
val.then(models => {
  console.log(models); // Prints the resolved value
})

const input = "teach me about nuclear physics, please be concise"
const promptData = {
  prompt: "five questions relating to: Introduction to programming using processing",
  model: "gpt-4o-mini",
  response_schema: PromptSchemaType.vivaQuestions
};
//AIService.constructPrompt(promptData);


