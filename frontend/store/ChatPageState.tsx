import {create} from "zustand";


type ChatPageState={
    Query:string;
    responce:[string];
    SetQuery?: (query:string)=>void;
}

export const useChatStore=create<ChatPageState>((set)=>({
    Query:"",
    responce:["sjdbfbsdfjbsljdfljsdfjljdfjb lkhdladbaldbad .aksdlbasidia ashdiahsid ashdiuasdhas oiahsdhasd aushd;aos d asdhasd ahsdoi asdhasod "],
    SetQuery:(query:string)=>set({Query:query})
}))