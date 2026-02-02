"use client";
import { Send } from "lucide-react";
import {useChatStore} from "@/store/ChatPageState";
export function AskInput() {
  // State to hold the user input
  const input =useChatStore((state)=>state.Query);
  const setInput=useChatStore((state)=>state.SetQuery)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the input submission logic here
    console.log("User input:", input);
    setInput("");
  };

  // Determine if the send button should be active
  const isActive = input.length > 0;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 rounded-[15px] border border-gray-200 bg-white px-4 py-3 shadow-sm">

        {/* input component in ask input */}
        <input
          type="text"
          placeholder="Ask anything about your college documents..."
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => isActive && e.key === "Enter" && handleSubmit(e)}
        />

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-[15px] bg-[#179af8] hover:bg-gray-200 transition ${
            isActive
              ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          aria-label="Send"
          onClick={handleSubmit}
          disabled={!isActive}
        >

          <Send className="h-5 w-5 text-[#FFFFFF]"/>

        </button>

      </div>
    </div>
  );
}
