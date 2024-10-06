"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
// Functions available 
// Viva Question Generator Schemas
const question = zod_1.default.object({
    id: zod_1.default.string(),
    question: zod_1.default.string(),
    type: zod_1.default.enum(['familiarity', 'discussion', 'criticalExpansion'])
});
const vivaQuestions = zod_1.default.object({
    questions: zod_1.default.array(question)
});
// Rubric generation structured responses
const levelSchema = zod_1.default.object({
    levelName: zod_1.default.string(),
    points: zod_1.default.number(),
});
const criteriaSchema = zod_1.default.object({
    criteriaName: zod_1.default.string(),
    description: zod_1.default.string(),
    levels: zod_1.default.array(levelSchema),
    marksPerLevel: zod_1.default.array(zod_1.default.number()),
});
// Entire rubric and total marks
const rubricSchema = zod_1.default.object({
    title: zod_1.default.string(),
    criteria: zod_1.default.array(criteriaSchema),
    totalMarks: zod_1.default.number(),
    learningOutcomes: zod_1.default.array(zod_1.default.string()),
});
// all prompts need
const promptSchema = zod_1.default.object({
    prompt: zod_1.default.string(),
    model: zod_1.default.string(),
    response_schema: zod_1.default.any()
});
const utils = {
    rubricSchema,
    criteriaSchema,
    question,
    vivaQuestions,
    promptSchema
};
exports.default = utils;
