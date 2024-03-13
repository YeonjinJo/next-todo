"use client";

import React from "react";
import ClientSideRendering from "@/components/rendering/ClientSideRendering";
import { useRouter } from "next/navigation";

const buttonStyle: string =
  "mx-1 mt-10 px-1 border rounded border-black border-solid hover:bg-cyan-300";

const TodoCSR = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <ClientSideRendering />
      <button onClick={() => router.push("/report")} className={buttonStyle}>
        통계 확인
      </button>
    </div>
  );
};

export default TodoCSR;
