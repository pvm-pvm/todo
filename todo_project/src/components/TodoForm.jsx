import { useState } from "react";

export const TodoForm = ({tasks,setTask})=>{
    const [inputValue,setInputValue] = useState("");
   
        
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