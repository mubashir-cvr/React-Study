import React from "react"
import ReactDOM from "react-dom"
// function Greetings(){
//   return <h4>Hi React</h4>;
// }

const  Greetings =()=> {
  return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
}

ReactDOM.render(<Greetings/>,document.getElementById("root"))