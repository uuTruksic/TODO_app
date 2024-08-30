import React, { FC, useState } from "react";
import { TodoInterface } from ".";

interface TodoAdderInterface {
  setTodoList: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}

const TodoAdder: FC<TodoAdderInterface> = ({ setTodoList }) => {
  const initialTodoValue: TodoInterface = { checked: false, value: "", id: -1 };
  const [newTodoValue, setNewTodoValue] = useState<TodoInterface>(initialTodoValue);

  console.log(newTodoValue);

  const submitNewTodo = () => {
    if (newTodoValue.value === "") {
      return;
    }

    setTodoList((prevState) => [...prevState, newTodoValue]);
    setNewTodoValue(initialTodoValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setNewTodoValue((prevState) => ({ ...prevState, value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    setNewTodoValue((prevState) => ({ ...prevState, checked }));
  };

  return (
    <React.Fragment>
      <h2>Add New Todo</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex p-1 mb-5 border border-black gap-x-2">
        <input type="checkbox" checked={newTodoValue.checked} onChange={(e) => handleCheckboxChange(e)} />
        <input type="text" value={newTodoValue.value} onChange={(e) => handleInputChange(e)} required />
        <button onClick={submitNewTodo}>ahooooj</button>
      </form>
    </React.Fragment>
  );
};

export default TodoAdder;
