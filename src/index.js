import React from "react"
import ReactDOM from "react-dom"
function Greetings(){
  return <h1>Hi From React Component</h1>;
}

ReactDOM.render(<Greetings/>,document.getElementById("root"))