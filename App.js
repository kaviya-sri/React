import React,{Component} from "react";
import State from "../src/State";
import Comp1 from "./components/Comp1";
import {UserProvider} from "./components/UserCon";

class App extends Component{
  render()
  {
    return(<div><State />
    <UserProvider value="Kaviya"><Comp1 /></UserProvider></div>);
  }
}
export default App;

