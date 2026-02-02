"use client"
import { AIResponse } from "@/component/AiResponse";
import { AskInput } from "@/component/AskInput";
import {useChatStore} from "@/store/ChatPageState";

export default function Home() {
  const response = useChatStore((state) => state.responce[0]);
  return (
    <>
    <AskInput/>
    <AIResponse message={response} time="10.00"/>
    </>
  )
}
