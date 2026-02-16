'use server';
/**
 * @fileOverview A Genkit flow for customizing practice modules based on user performance.
 *
 * - customizePracticeModules - A function that analyzes user performance and suggests tailored practice modules.
 * - CustomizePracticeModulesInput - The input type for the customizePracticeModules function.
 * - CustomizePracticeModulesOutput - The return type for the customizePracticeModules function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizePracticeModulesInputSchema = z.object({
  performanceData: z
    .string()
    .describe(
      "Detailed description of the user's past performance in practice questions, including topics, scores, time spent, and areas of struggle."
    ),
  careerGoals: z
    .string()
    .describe(
      "The user's career goals and aspirations (e.g., 'Software Engineer at FAANG', 'Data Scientist')."
    ),
  learningPreferences: z
    .string()
    .describe(
      "The user's preferred learning style and preferences (e.g., 'prefers hands-on coding challenges', 'needs detailed explanations')."
    ),
  availableModules: z
    .array(z.string())
    .describe(
      'A list of all available practice modules/topics that can be recommended.'
    ),
});
export type CustomizePracticeModulesInput = z.infer<
  typeof CustomizePracticeModulesInputSchema
>;

const CustomizePracticeModulesOutputSchema = z.object({
  weaknesses: z
    .array(z.string())
    .describe(
      'An array of specific topics or concepts where the user has shown weaknesses based on their performance data.'
    ),
  suggestedModules: z
    .array(z.string())
    .describe(
      'An array of recommended practice modules from the available list, tailored to address the user\'s weaknesses and align with their learning preferences and career goals.'
    ),
  reasoning: z
    .string()
    .describe(
      'A detailed explanation of why the specific modules were suggested, linking back to identified weaknesses, career goals, and learning preferences.'
    ),
});
export type CustomizePracticeModulesOutput = z.infer<
  typeof CustomizePracticeModulesOutputSchema
>;

export async function customizePracticeModules(
  input: CustomizePracticeModulesInput
): Promise<CustomizePracticeModulesOutput> {
  return customizePracticeModulesFlow(input);
}

const customizePracticeModulesPrompt = ai.definePrompt({
  name: 'customizePracticeModulesPrompt',
  input: {schema: CustomizePracticeModulesInputSchema},
  output: {schema: CustomizePracticeModulesOutputSchema},
  prompt: `You are an AI learning assistant for PrepStack, specializing in creating personalized study plans. Your goal is to analyze a user's performance and learning profile to recommend the most effective practice modules for them to improve.

Based on the following information, identify the user's weaknesses and suggest practice modules from the provided list that will help them improve, while also considering their career goals and learning preferences. Provide a clear reasoning for your suggestions.

User Performance Data: {{{performanceData}}}

User Career Goals: {{{careerGoals}}}

User Learning Preferences: {{{learningPreferences}}}

Available Practice Modules: {{{availableModules}}}

Identify the user's core weaknesses based on their performance. Then, from the list of 'Available Practice Modules', select the most relevant ones to address these weaknesses, keeping in mind their career goals and learning preferences. Ensure the suggested modules are specific and actionable. Explain your reasoning comprehensively.`,
});

const customizePracticeModulesFlow = ai.defineFlow(
  {
    name: 'customizePracticeModulesFlow',
    inputSchema: CustomizePracticeModulesInputSchema,
    outputSchema: CustomizePracticeModulesOutputSchema,
  },
  async input => {
    const {output} = await customizePracticeModulesPrompt(input);
    return output!;
  }
);
