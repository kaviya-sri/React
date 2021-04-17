import React,{useContext} from "react";
import {UserContext } from "./UserCon";
function UseComp3()
{
    const username= useContext(UserContext);
    return(<div>Hello for {username} by using useContext</div>) 
}
export default UseComp3;