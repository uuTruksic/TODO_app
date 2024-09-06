import { useEffect, useRef, useState } from "react";
import TodoAdder from "./todoAdder";
import TodoList from "./todoList";

export interface TodoInterface {
  id: number;
  value: string;
  checked: boolean;
}

const Todo = () => {
  const todoDefaultValues = [
    { id: 0, value: "ahoj", checked: true },
    { id: 1, value: "nazdar", checked: true },
    { id: 2, value: "cau", checked: true },
  ]

  
  const [todoList, setTodoList] = useState<TodoInterface[]>(todoDefaultValues);
  const todoLoadedLocalStorage = useRef(false)

  useEffect(() => {
    if (localStorage.getItem("todoData") === null) {
      localStorage.setItem("todoData", JSON.stringify(todoList))
    } else {
      const localStorageData = localStorage.getItem("todoData")
      if (localStorageData) {
        setTodoList(JSON.parse(localStorageData))
      }
    }
  }, [])

  useEffect(() => {
    if(!todoLoadedLocalStorage.current){
      todoLoadedLocalStorage.current = true
      return
    }

    localStorage.setItem("todoData", JSON.stringify(todoList))

  }, [todoList])

  return (
    <div className="p-8 w-screen min-h-screen bg-yellow-50">
      <TodoAdder setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Todo;
