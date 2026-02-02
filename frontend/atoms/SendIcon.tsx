"use client"
import {Button} from "@heroui/react";

import * as React from "react";
const SendIcon= () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    />
  </svg>
);






export default function SendIconAtom() {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly aria-label="Like" color="danger">
        <SendIcon/>
      </Button>
    </div>
  );
}
