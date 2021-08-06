import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import ToDoItem from "./TodoItem";

import "./styles.css";

export default function App() {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      {todos.map((item, index) => (
        <ToDoItem key={index} item={item} itemId={index} />
      ))}
    </div>
  );
}
