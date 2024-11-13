import { useState } from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoClear } from "./TodoClear";
import { getLocalStorageData } from "./ToLocalStorageHandle";
import "./Todo.css";

export const Todo = () => {

  const [tasks,setTask] = useState(getLocalStorageData)

  return (
    <section className="todo-container">
      <TodoHeader />
       <TodoForm tasks={tasks} setTask={setTask} />
      <TodoList tasks={tasks} setTask={setTask}/>
      <TodoClear setTask={setTask}/> 
    </section>
  );
};
