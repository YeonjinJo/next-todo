import { TodoType } from "@/types";
import React from "react";

const IncrementalSiteRegeneration = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const timeString = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

  const response = await fetch(`http://localhost:3000/api/todo`, {
    next: {
      revalidate: 10,
    },
  });
  const { todoItems }: TodoType = await response.json();

  const totalLength: number = todoItems.length;
  const inProgressLength: number = todoItems.filter(
    (element) => !element.isDone
  ).length;

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">Report</h3>
      <p>최근 업데이트 시간: {timeString}</p>
      <p>아직 수행해야할 항목이 {inProgressLength}개 남아있습니다.</p>
      <p>총 항목의 개수는 {totalLength}개 입니다.</p>
    </div>
  );
};

export default IncrementalSiteRegeneration;
