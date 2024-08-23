import { Dispatch, FC, SetStateAction } from "react";
import { TodosInterface } from "./todoList";

interface TodoFormInterface {
  setTodos: Dispatch<SetStateAction<TodosInterface[]>>;
  todos: TodosInterface[];
}

const TodoForm: FC<TodoFormInterface> = ({ todos, setTodos }) => {
  return <div>TodoForm</div>;
};

export default TodoForm;
