import { useEffect, useState } from "react";

export const TodoHeader = () => {
    const [dateAndTime,setDateAndTime] = useState("");
    //    useEffect(()=>{
    //     const intervalId= setInterval(()=>{
    //         const currDateTime = new Date();
    //         const date = currDateTime.toLocaleDateString();
    //         const time = currDateTime.toLocaleTimeString();
    //         setDateAndTime(`${date}-${time}`);
    //     },1000)

    //     return ()=>clearInterval(intervalId);
    // },[])

    return (
    <header>
      <h1>To Do List</h1>
      <h1 className="date-time"> {dateAndTime}</h1>
      {/**Date functionality */}
    </header>
  );
};
