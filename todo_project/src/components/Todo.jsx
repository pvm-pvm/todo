import { useEffect, useState } from "react";

import { TodoHeader } from "./TodoHeader";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { TodoClear } from "./TodoClear";

export const Todo = () => {
    const [tasks,setTask] = useState([]);

  return (
    <section className="todo-container">
      <TodoHeader />
       <TodoForm tasks={tasks} setTask={setTask} />
      <TodoList tasks={tasks} setTask={setTask}/>
      <TodoClear setTask={setTask}/> 
    </section>
  );
};
