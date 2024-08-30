import { Dispatch, FC, SetStateAction } from "react";
import { TodoInterface } from ".";
import TodoForm from "./todoForm";

export interface TodoListInterface {
  setTodoList: Dispatch<SetStateAction<TodoInterface[]>>;
  todoList: TodoInterface[];
}

const TodoList: FC<TodoListInterface> = ({ todoList: todos, setTodoList: setTodos }) => {
  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>, wantedTodoIndex: number, attribute: "value" | "checked") => {
    const todoCopy = [...todos];

    todoCopy[wantedTodoIndex] = { ...todoCopy[wantedTodoIndex], [attribute]: attribute === "checked" ? e.currentTarget.checked : e.currentTarget.value };
    setTodos(todoCopy);
  };

  const onDeleteTodo = (wantedTodoId: number) => {
    const todoCopy = [...todos];
    todoCopy.filter((todo) => todo.id === wantedTodoId);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== wantedTodoId));
  };

  return (
    <div className="flex flex-col gap-y-2">
      {todos.map((todo, index) => (
        <TodoForm key={index} todo={todo} todoIndex={index} updateFunction={onChangeTodo} deleteFunction={onDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
