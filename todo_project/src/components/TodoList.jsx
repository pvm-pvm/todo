import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({tasks,setTask})=>{
    
    
    function handleDelete(value){
        const updatedTasks =  tasks.filter(ele => ele !== value);
         setTask(updatedTasks);
       }
    return (
        <section>
        <ul className="myUnorderedList todo-list">
            {
                tasks.map((ele,index)=>{
                    return (
                        <li key={index} className="todo-item">
                            <span>{ele}</span>
                            <button className="check-btn"><MdCheck /></button>
                            <button onClick={()=>handleDelete(ele)}  className="delete-btn"><MdDeleteForever /></button>
                        </li>
                    )
                })
            }
        </ul>
    </section>
    )
}