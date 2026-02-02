import {create} from "zustand";


type ChatPageState={
    Query:string;
    SetQuery?: (query:string)=>void;
}

export const useChatStore=create<ChatPageState>((set)=>({
    Query:"",
    SetQuery:(query:string)=>set({Query:query})
}))