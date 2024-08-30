import { useState } from "react";
import TodoAdder from "./todoAdder";
import TodoList from "./todoList";

export interface TodoInterface {
  id: number;
  value: string;
  checked: boolean;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoInterface[]>([
    { id: 0, value: "ahoj", checked: true },
    { id: 1, value: "nazdar", checked: true },
    { id: 2, value: "cau", checked: true },
  ]);

  return (
    <div className="w-screen min-h-screen p-8 bg-yellow-50">
      <TodoAdder setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Todo;
