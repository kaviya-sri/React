import React,{Component} from "react";
import Comp3 from "./Comp3";
import UseComp3 from "./UseComp3";

class Comp2 extends Component{
  render()
  {
    return(<div><Comp3 /> <UseComp3 /></div>);
  }
}
export default Comp2;