import React, { useState } from "react";
import uuid from "react-uuid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ElementType } from "@/types";
import { addTodoItem } from "@/api/manageTodo";

const buttonStyle: string =
  "mx-1 my-1 px-1 border rounded border-black border-solid hover:bg-cyan-300";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const id: string = uuid();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: ElementType = {
      id,
      title,
      isDone: false,
    };

    mutate(newTodo);

    setTitle("");
  };

  return (
    <form className="mb-10" onSubmit={onSubmitHandler}>
      <input
        className="border-black border-2 rounded mx-1"
        type="text"
        value={title}
        onChange={onChangeHandler}
      ></input>
      <button className={buttonStyle}>Submit</button>
    </form>
  );
};

export default AddTodo;
