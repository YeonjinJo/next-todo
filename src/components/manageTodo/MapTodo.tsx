import ToggleTodo from "./ToggleTodo";
import ModifyTodo from "./ModifyTodo";
import DeleteTodo from "./DeleteTodo";
import { ElementType } from "@/types";

const MapTodo = ({ element }: { element: ElementType }) => {
  return (
    <div className="flex flex-col items-center" id={element.id}>
      <p className="mt-3">{element.title}</p>
      <div className="flex flex-row items-center">
        <ToggleTodo element={element} />
        <ModifyTodo element={element} />
        <DeleteTodo id={element.id} />
      </div>
    </div>
  );
};

export default MapTodo;
