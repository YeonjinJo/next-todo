import ServerSideRendering from "@/components/rendering/ServerSideRendering";
import Link from "next/link";
import React from "react";
import { buttonStyle } from "../layout";

const TodoSSR = () => {
  return (
    <div className="flex flex-col items-center">
      <ServerSideRendering />
      <Link href="/report" className={buttonStyle}>
        통계 확인
      </Link>
    </div>
  );
};

export default TodoSSR;
