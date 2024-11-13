import { useState } from "react";
import { setLocalStorageData } from "./ToLocalStorageHandle";

export const TodoForm = ({tasks,setTask})=>{
    const [inputValue,setInputValue] = useState("");
   
        
    function handleInput(value){
        setInputValue(value);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        const isTaskExist = tasks.some((task)=>{
            return task.content === inputValue;
        })
        if(isTaskExist){
            setInputValue("");
            return;
        }
        setTask(prevTasks=>{
           return [...prevTasks,{id:inputValue,content:inputValue,checked:false}]
       });
        setInputValue("");
    }
    setLocalStorageData(tasks);
    
    return (
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
    );
}