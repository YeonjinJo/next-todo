import { ElementType } from "@/types";

export const fetchTodoItems = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const data = await response.json();

  return data;
};

export const addTodoItem = async (newTodo: ElementType) => {
  await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};

export const deleteTodoItem = async (id: string) => {
  await fetch("http://localhost:3000/api/todo", {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  });
};

export const modifyTodoItem = async (newTodo: ElementType) => {
  await fetch("http://localhost:3000/api/todo", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};