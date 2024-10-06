import z from "zod";

// Functions available 

// Viva Question Generator Schemas
const question = z.object({
  id: z.string(),
  question: z.string(),
  type: z.enum(['familiarity', 'discussion', 'criticalExpansion'])
});

const vivaQuestions = z.object({
  questions: z.array(question)
})

// Rubric generation structured responses
const levelSchema = z.object({
  levelName: z.string(),
  points: z.number(),
});

const criteriaSchema = z.object({
  criteriaName: z.string(),
  description: z.string(),
  levels: z.array(levelSchema),
  marksPerLevel: z.array(z.number()),
});

// Entire rubric and total marks
const rubricSchema = z.object({
  title: z.string(),
  criteria: z.array(criteriaSchema),
  totalMarks: z.number(),
  learningOutcomes: z.array(z.string()),
});

// all prompts need
const promptSchema = z.object({
  prompt: z.string(),
  model: z.string(),
  response_schema: z.any()
})


const utils = {
  rubricSchema,
  criteriaSchema,
  question,
  vivaQuestions,
  promptSchema
};
export type PromptSchemaType = z.infer<typeof promptSchema>;
export default utils;
