import React,{Component} from "react";
import { UserConsumer } from "./UserCon";


class Comp3 extends Component{
  render(){
    return(<UserConsumer>
      {username=>{return <div>Hi for {username} by using context consumer</div>}}
    </UserConsumer>);
  }
}
export default Comp3;