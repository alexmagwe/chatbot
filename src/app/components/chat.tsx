"use client";
import React from "react";
import {
  ArrowBigDown,
  ArrowDown,
  ChevronDown,
  Circle,
  MessageCircle,
} from "lucide-react";
import ChatArea from "./ChatArea";
import { motion } from "framer-motion";
type Props = {};

const variants = {
  open: { opacity: 1, height: "100%" },
  closed: { opacity: 1, height: "0" },
};
export default function Chat({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-purple-700 p-4 flex flex-col h-full gap-4 rounded-lg">
      <button
        onClick={handleClick}
        className="  flex gap-2 justify-between w-full"
      >
        {/* <div className=" flex">
        <div className="flex gap-2">
          <MessageCircle size={24} />
        </div>
      </div> */}
        <div className="flex items-center gap-2 ">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p>Chat with Buddy</p>
        </div>
        <ChevronDown className={`duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        className="overflow-hidden"
      >
        <ChatArea />
      </motion.div>
    </div>
  );
}
