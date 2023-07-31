import { ParsedEvent, ReconnectInterval, createParser } from "eventsource-parser";

export interface GPTMessage {
  role: ChatGPTAgent;
  content: string;
}
export type ChatGPTAgent = "user" | "system";

export interface OpenAIStreamPayload {
  model: string;
  messages: GPTMessage[];
  temperature: number;
  top_p: number;
  max_tokens: number;
  stream: boolean;
  presence_penalty: number;
  frequency_penalty: number;
  n: number;
}

interface OutboundMessage {
  // Define the properties of an outbound message here
  // For example:
  role: "system" | "user" | "assistant";
  content: string;
}

export const OpenAIStream = async (payload: OpenAIStreamPayload) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let counter = 0;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },

    body: JSON.stringify(payload),
  });
console.log(res)
  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type == "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            console.log("json", json);
            const text = json.choices[0].delta?.content;
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            console.log(e);
          }
        }
      }
      const parser=createParser(onParse)
      for await (const chunks of res.body as any) {
        const text = decoder.decode(chunks);
        parser.feed(text);
      }
    },
  });
  return stream
};
