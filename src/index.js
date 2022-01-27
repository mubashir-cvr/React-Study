import React from "react"
import ReactDOM from "react-dom"
function BookList(){
  
  return (
  <section>
    <Book/>
    
    
  </section>
  );
}

const Book=() =>{
  return <div>
  <h4>My book</h4>
  <Image/>
  </div>
  }
const Image=() =>{return <img width={100} src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />}
const Message=() =><p>My Message</p>

// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))