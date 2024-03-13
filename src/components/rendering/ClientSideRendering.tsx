import React from "react";
import { TodoType } from "@/types";
import MapTodo from "../manageTodo/MapTodo";
import AddTodo from "../manageTodo/AddTodo";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoItems } from "@/api/manageTodo";

const ClientSideRendering = () => {
  const { isSuccess, isLoading, isError, data } = useQuery<TodoType>({
    queryKey: ["todo"],
    queryFn: fetchTodoItems,
  });

  if (isLoading) {
    return <h3 className="text-xl font-extrabold">Now Loading...</h3>;
  }

  if (isError) {
    return <h3 className="text-xl font-extrabold">Error</h3>;
  }

  if (isSuccess) {
    return (
      <>
        <h3 className="text-xl font-extrabold">Add Todo</h3>
        <AddTodo />
        <h3 className="text-xl font-extrabold">In progress</h3>
        {data.todoItems.map((element) =>
          !element.isDone ? <MapTodo element={element} /> : <></>
        )}
        <h3 className="mt-10 text-xl font-extrabold">Done</h3>
        {data.todoItems.map((element) =>
          element.isDone ? <MapTodo element={element} /> : <></>
        )}
      </>
    );
  }
};

export default ClientSideRendering;
