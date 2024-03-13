import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { modifyTodoItem } from "@/api/manageTodo";
import { ElementType } from "@/types";

const buttonStyle: string =
  "mx-1 my-1 px-1 border rounded border-black border-solid hover:bg-cyan-300";

const ModifyTodo = ({ element }: { element: ElementType }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: modifyTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const [modifyOpen, setModifyOpen] = useState<Boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTodo = {
      id: element.id,
      title: newTitle,
      isDone: element.isDone,
    };

    mutate(newTodo);
    setModifyOpen(false);
  };

  const modifyForm = () => {
    setModifyOpen(true);
  };

  return (
    <>
      {modifyOpen ? (
        <div>
          <input
            className="border-black border-2 rounded mx-1"
            type="text"
            value={newTitle}
            onChange={onChangeHandler}
          ></input>
          <button className={buttonStyle} onClick={onClickHandler}>
            수정
          </button>
        </div>
      ) : (
        <button className={buttonStyle} onClick={modifyForm}>
          수정
        </button>
      )}
    </>
  );
};

export default ModifyTodo;
