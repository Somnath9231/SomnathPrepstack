'use server';
/**
 * @fileOverview This file implements a Genkit flow for intelligent resource recommendations.
 * It suggests relevant learning materials (like resume templates, cheat sheets, or interview guides)
 * based on a user's learning progress, identified knowledge gaps, and career goals.
 *
 * - recommendResources - A function that handles the resource recommendation process.
 * - RecommendResourcesInput - The input type for the recommendResources function.
 * - RecommendResourcesOutput - The return type for the recommendResources function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecommendResourcesInputSchema = z.object({
  learningProgress: z.string().describe('A detailed description of the user\u0027s learning progress, including strengths and weaknesses.'),
  knowledgeGaps: z.string().describe('Identified knowledge gaps or weak areas for the user. Can be a comma-separated list.'),
  careerGoals: z.string().describe('The user\u0027s career goals, e.g., "Software Engineer at FAANG", "Data Scientist", etc.'),
  resourceTypePreference: z.enum(['Resume Templates', 'Cheat Sheets', 'Interview Guides', 'All'])
    .optional()
    .default('All')
    .describe('Optional: Specific type of resource the user is looking for. Options: "Resume Templates", "Cheat Sheets", "Interview Guides", "All".'),
});
export type RecommendResourcesInput = z.infer<typeof RecommendResourcesInputSchema>;

const RecommendResourcesOutputSchema = z.object({
  recommendations: z.array(z.object({
    title: z.string().describe('The title of the recommended resource.'),
    description: z.string().describe('A brief description of what the resource covers.'),
    type: z.enum(['Resume Template', 'Cheat Sheet', 'Interview Guide']).describe('The category of the recommended resource.'),
    relevanceReason: z.string().describe('An explanation of why this resource is relevant to the user based on their input.'),
  })).describe('A list of recommended resources.'),
});
export type RecommendResourcesOutput = z.infer<typeof RecommendResourcesOutputSchema>;

// Define the prompt for the resource recommendation
const resourceRecommendationPrompt = ai.definePrompt({
  name: 'resourceRecommendationPrompt',
  input: { schema: RecommendResourcesInputSchema },
  output: { schema: RecommendResourcesOutputSchema },
  prompt: `You are an intelligent resource recommendation system for PrepStack.\nYour goal is to suggest highly relevant learning materials to a user based on their profile.\n\nHere is the user's information:\nLearning Progress: {{{learningProgress}}}\nKnowledge Gaps: {{{knowledgeGaps}}}\nCareer Goals: {{{careerGoals}}}\nResource Type Preference: {{{resourceTypePreference}}}\n\nAvailable Resource Types and Examples:\n- Resume Templates: Modern Tech Resume, Fresher Resume, Experienced Resume, ATS-Friendly Resume\n- Cheat Sheets: DSA Cheat Sheet, DBMS Cheat Sheet, OS Cheat Sheet, Networking Cheat Sheet, Aptitude Formula Sheet\n- Interview Guides: HR Questions Guide, Technical Interview Guide, System Design Guide\n\nBased on the provided information, recommend up to 3 resources that would be most beneficial to the user.\nConsider their knowledge gaps, career goals, and preferred resource types.\nFor each recommendation, provide a title, a brief description, the type of resource, and a clear reason for its relevance.\nEnsure the 'type' field matches one of the exact categories: 'Resume Template', 'Cheat Sheet', or 'Interview Guide'.\nIf a specific 'resourceTypePreference' is provided, prioritize recommendations from that category.\nIf no specific resource type is preferred, suggest a mix if appropriate.\n`,
});

// Define the Genkit flow for resource recommendation
const recommendResourcesFlow = ai.defineFlow(
  {
    name: 'recommendResourcesFlow',
    inputSchema: RecommendResourcesInputSchema,
    outputSchema: RecommendResourcesOutputSchema,
  },
  async (input) => {
    const { output } = await resourceRecommendationPrompt(input);
    if (!output) {
      throw new Error('Failed to get recommendations from the AI model.');
    }
    return output;
  }
);

// Wrapper function to expose the flow to the application
export async function recommendResources(input: RecommendResourcesInput): Promise<RecommendResourcesOutput> {
  return recommendResourcesFlow(input);
}
