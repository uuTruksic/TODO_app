import { FC } from "react";
import { TodoInterface } from ".";

interface TodoFormInterface {
  todo: TodoInterface;
  todoIndex: number;
  deleteFunction: (wantedTodoId: number) => void;
  updateFunction: (e: React.ChangeEvent<HTMLInputElement>, wantedTodoIndex: number, attribute: "value" | "checked") => void;
}

const TodoForm: FC<TodoFormInterface> = ({ todo, todoIndex, deleteFunction, updateFunction }) => {
  return (
    <div className="flex p-1 border border-black gap-x-2">
      <input type="checkbox" checked={todo.checked} onChange={(e) => updateFunction(e, todoIndex, "checked")} />
      <input value={todo.value} onChange={(e) => updateFunction(e, todoIndex, "value")} className="border border-black rounded-sm" />
      <button onClick={() => deleteFunction(todo.id)}>Delete me</button>
    </div>
  );
};

export default TodoForm;
