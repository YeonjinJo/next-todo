import { deleteTodoItem } from "@/api/manageTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const buttonStyle: string =
  "mx-1 my-1 px-1 border rounded border-black border-solid hover:bg-cyan-300";

const DeleteTodo = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const onClickHandler = () => {
    mutate(id);
  };
  return (
    <button className={buttonStyle} onClick={onClickHandler}>
      삭제
    </button>
  );
};

export default DeleteTodo;
