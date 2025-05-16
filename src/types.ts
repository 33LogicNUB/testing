import * as z from 'zod';


export const todoSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional()
});

export type Todo = z.infer<typeof todoSchema> & { id: string };
export type TodoForm = z.infer<typeof todoSchema>;
