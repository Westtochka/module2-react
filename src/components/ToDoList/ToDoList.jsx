import todosData from "../../assets/todos.json";
import { ToDoItem } from "./ToDoItem";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const ToDoList = () => {
  // const [todos, setTodos] = useState(() => {
  //   const saveData = window.localStorage.getItem("todos");
  //   if (saveData !== null) {
  //     return JSON.parse(saveData);
  //   }
  //   todosData;
  // });
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) ?? todosData
  );
  // const [todos, setTodos] = useState(todosData);
  const [newValue, setNewValue] = useState("");

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id != id));
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = {
      id: nanoid(),
      text: newValue,
      complited: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    console.log(newValue);
  };

  return (
    <>
      <div>
        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((item) => (
          <ToDoItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
