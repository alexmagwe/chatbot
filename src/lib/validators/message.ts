import z from "zod";
export const messageSchema = z.object({
  id: z.string(),
  isUserInput: z.boolean(),
  text: z.string(),
});

export const MessagesArraySchema = z.array(messageSchema);
export type Message = z.infer<typeof messageSchema>;
export type MessageArray = z.infer<typeof MessagesArraySchema>;