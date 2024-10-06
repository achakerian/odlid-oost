import { OpenAI } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import dotenv from "dotenv";
import { PromptSchemaType } from "./zodSchemas";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// ^^^ setup requirements 

// functions that take in Zod schemas and return Zod schemas
// zod schemas can be found in zodSchemas.ts
async function constructPrompt(input: PromptSchemaType) {
  try {
    const response = await openai.chat.completions.create({
      model: input.model,
      messages: [
        { role: "user", content: input.prompt }, 
      ],
      response_format: zodResponseFormat(input.response_schema, "event"),
    });
    console.log(response.choices[0].message);
    return response.choices[0].message;
  } catch (error) {
    console.error("Error:", error);
    return "error";
  }
}

async function availableModels() {
  try {
    const ret =  await openai.models.list();
    return ret.data;
  } catch (error: unknown) {
    return [];
  }
}

const AIutils = {
  availableModels,
  constructPrompt
}
export default AIutils;
