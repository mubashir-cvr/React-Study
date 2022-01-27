import React from "react"
import ReactDOM from "react-dom"

import './index.css'
function BookList(){
  
  return (
  <section className="booklist">
    <Book  title="My Title"/>
    <Book title="My Title1"/>
    <Book title="My Title2"/>
    <Book title="My Title3"/>
    
    
  </section>
  );
}

const Book=(prop) =>{
  const title="My Book";
  return <section className="book">
  
  <Image/>
  <h2>{prop.title}</h2>
  <Title/>
  </section>
  }
const Image=() =>{return <img src="https://dummyimage.com/150x200.gif?text=book" />}
const Title=() =><p>My Message</p>

// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))