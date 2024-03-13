import { modifyTodoItem } from "@/api/manageTodo";
import { ElementType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const buttonStyle: string =
  "mx-1 my-1 px-1 border rounded border-black border-solid hover:bg-cyan-300";

const ToggleTodo = ({ element }: { element: ElementType }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: modifyTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const onClickHandler = async () => {
    const newTodo = {
      id: element.id,
      title: element.title,
      isDone: !element.isDone,
    };

    mutate(newTodo);
  };

  return (
    <button className={buttonStyle} onClick={onClickHandler}>
      {element.isDone ? `취소` : `완료`}
    </button>
  );
};

export default ToggleTodo;
