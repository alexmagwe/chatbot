import React, { useState } from "react";
import { ChatForm } from "./ChatForm";
import { ChatLog } from "./ChatLog";
import { useChat } from "ai/react";

export type Props = {};

export default function ChatArea({}: Props) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="bg-slate-100 p-2 rounded-md text-slate-800 ">
      <ChatLog messages={messages} />
      <ChatForm
        input={input}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
