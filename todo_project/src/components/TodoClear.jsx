export const TodoClear = ({setTask})=>{
    
    function handleClearAll(){
        setTask([]);
    }
    
    return (
        <section>
             <button onClick={handleClearAll} className="clear-btn">Clear All</button>
         </section>
    );
}