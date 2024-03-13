import { TodoType } from "@/types";
import React from "react";

const ServerSideRendering = async () => {
  const response = await fetch(`http://localhost:3000/api/todo`, {
    cache: "no-cache",
  });

  const { todoItems }: TodoType = await response.json();

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">In progress</h3>
      {todoItems.map((element) =>
        !element.isDone ? <p key={element.id}>{element.title}</p> : <></>
      )}

      <h3 className="text-xl font-extrabold">Done</h3>
      {todoItems.map((element) =>
        element.isDone ? <p key={element.id}>{element.title}</p> : <></>
      )}
    </div>
  );
};

export default ServerSideRendering;
