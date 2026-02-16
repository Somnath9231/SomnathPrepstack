'use server';
/**
 * @fileOverview A GenAI agent for generating personalized learning roadmaps.
 *
 * - generateRoadmap - A function that generates a personalized learning roadmap.
 * - RoadmapGenerationInput - The input type for the generateRoadmap function.
 * - RoadmapGenerationOutput - The return type for the generateRoadmap function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RoadmapGenerationInputSchema = z.object({
  careerGoals: z.string().describe('The user\'s career aspirations and target roles.'),
  experienceLevel: z.string().describe('The user\'s current experience level, e.g., "beginner", "intermediate", "experienced".'),
});
export type RoadmapGenerationInput = z.infer<typeof RoadmapGenerationInputSchema>;

const RoadmapGenerationOutputSchema = z.object({
  roadmap: z.string().describe('A detailed, markdown-formatted personalized learning roadmap, including topics, estimated timeframes, and recommended learning paths.'),
  optimalSkills: z.array(z.string()).describe('A list of optimal skills to learn, directly relevant to the career goals and experience level.'),
});
export type RoadmapGenerationOutput = z.infer<typeof RoadmapGenerationOutputSchema>;

export async function generateRoadmap(input: RoadmapGenerationInput): Promise<RoadmapGenerationOutput> {
  return generateRoadmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'roadmapGenerationPrompt',
  input: { schema: RoadmapGenerationInputSchema },
  output: { schema: RoadmapGenerationOutputSchema },
  prompt: `You are an expert career advisor and educator specializing in placement preparation. Your task is to create a highly personalized learning roadmap and identify optimal skills for a user based on their career goals and current experience level.\n\nThe roadmap should be comprehensive, structured, and presented in markdown format. It should include topics, estimated timeframes (e.g., "Week 1-2"), and recommended learning paths. The optimal skills should be a concise list of key abilities needed to achieve the user's goals.\n\nUser's Career Goals: {{{careerGoals}}}\nUser's Experience Level: {{{experienceLevel}}}\n\nGenerate the personalized learning roadmap and optimal skills based on the provided information. Ensure the roadmap is actionable and progressive.`,
});

const generateRoadmapFlow = ai.defineFlow(
  {
    name: 'generateRoadmapFlow',
    inputSchema: RoadmapGenerationInputSchema,
    outputSchema: RoadmapGenerationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
