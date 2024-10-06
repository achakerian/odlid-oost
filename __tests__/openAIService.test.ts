import { OpenAI } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import dotenv from "dotenv";
import utils from "../src/zodSchemas";
import AIService from "../src/openAIService";
import { ListFormat } from "typescript";
import { JsonableValue } from "ts-jest";

describe('openAIService', ()=> {
    test('modelList', ()=>{
        const ret = AIService.availableModels();
        expect(ret).toBeInstanceOf(Object);
    });
    test('promptService', ()=>{
        const promptData = {
            prompt: "five questions relating to: Introduction to programming using processing",
            model: "gpt-4o-mini",
            response_schema: utils.vivaQuestions
          };
        const ret = AIService.constructPrompt(promptData);
    });
});