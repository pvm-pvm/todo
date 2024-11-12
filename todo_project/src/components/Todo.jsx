import { useState } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
import "./Todo.css"

export const Todo = ()=>{
    const [inputValue,setInputValue] = useState("");
    const [tasks,setTask] = useState([]);
    
    function handleInput(value){
        setInputValue(value);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        if(tasks.includes(inputValue)){
            setInputValue("");
            return;
        }
        setTask(prevTasks=> [...prevTasks,inputValue]);
        setInputValue("");
    }
    return(
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
                {/**Date functionality */}
            </header>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <input 
                    type="text" 
                     autoComplete="off" 
                     placeholder="Enter task"
                      value={inputValue}
                      onChange={(event)=>handleInput(event.target.value)}
                      />
                    <button type="submit">Submit</button>
                    
                </form>
            </section>
            <section>
                        <ul className="myUnorderedList todo-list">
                            {
                                tasks.map((ele,index)=>{
                                    return (
                                        <li key={index} className="todo-item">
                                            <span>{ele}</span>
                                            <button className="check-btn"><MdCheck /></button>
                                            <button className="delete-btn"><MdDeleteForever /></button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
        </section>
    );
}