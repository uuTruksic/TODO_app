import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./todoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
