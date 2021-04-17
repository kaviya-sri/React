import React ,{useState,useEffect} from "react";
 function State()
 {
     const now=new Date().toLocaleTimeString();
     const [time,setTime] = useState(now);
     function updateTime()
     {
         const newt=new Date().toLocaleTimeString();
         setTime(newt);
     }
     return(
         <div className="cont">
             <h1>{time}</h1>
             <button onClick={updateTime}>Get Time</button>
         </div>
     )
 }
 export default State;