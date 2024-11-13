import { setLocalStorageData } from "./ToLocalStorageHandle";

export const TodoClear = ({setTask})=>{
    
    function handleClearAll(){
        setTask([]);
        setLocalStorageData([]);
        
    }
    
    return (
        <section>
             <button onClick={handleClearAll} className="clear-btn">Clear All</button>
         </section>
    );
}