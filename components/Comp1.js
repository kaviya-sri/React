import React,{Component} from "react";
import Comp2 from "./Comp2";

class Comp1 extends Component{
  render()
  {
    return(<div><Comp2 />
    </div>);
  }
}
export default Comp1;