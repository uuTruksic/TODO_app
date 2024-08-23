import { useState } from "react";
import TodoForm from "./todoForm";

export interface TodosInterface {
  id: number;
  value: string;
  checked: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodosInterface[]>([]);

  return (
    <div className="w-screen min-h-screen bg-yellow-50">
      <TodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
