import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    period: z.string(),
    featured: z.boolean().default(false),
    stack: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    period: z.string(),
    current: z.boolean().default(false),
    achievements: z.array(z.string()),
    stack: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { projects, experience };
