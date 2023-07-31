import { Message } from "@/lib/validators/message";
import { useMutation } from "@tanstack/react-query";
import { ArrowBigRight } from "lucide-react";

import React from "react";
type Props = {
  input: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ChatForm({ input, handleInputChange, handleSubmit }: Props) {
  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (data: Message) => {
      fetch("/api/prompt", {
        method: "POST",
        body: JSON.stringify({ messages: [data] }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => console.log(res.body));
    },
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center justify-center"
    >
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="how can i help..."
        required
        className="w-full bg-slate-200  text-sm px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-slate-300 shadow-sm rounded-lg"
      />
      <button type="submit" className="bg-indigo-600 rounded-md px-3 py-2">
        <ArrowBigRight color="white" />
      </button>
    </form>
  );
}
