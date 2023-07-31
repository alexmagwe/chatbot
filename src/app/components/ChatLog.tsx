import { Message } from "ai";
import { Circle } from "lucide-react";
import React from "react";

type Props = {
  messages: Message[];
};
export function ChatLog({ messages }: Props) {
  return (
    <div className="bg-slate-200 p-2 ">
      <div className="flex flex-col gap-2">
        {messages.map((message, i) => {
          return (
            <div key={i} className="flex gap-2">
              <div className="flex gap-2">
                <Circle size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-slate-800">{message.role}</p>
                <p className="text-sm text-slate-800">{message.content}</p>
                <p className="text-xs text-slate-600">
                  {message.createdAt?.toString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
