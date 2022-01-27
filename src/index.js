import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const firtsbook={
  title:"My Title from dict",

}
function BookList(){
  
  return (
  <section className="booklist">
    <Book  title={firtsbook.title} h="Next Param"/>
    <Book title="My Title1" h="Next Param"/>
    <Book title="My Title2" h="Next Param"/>
    <Book title="My Title3" h="Next Param"/>
    
    
  </section>
  );
}

const Book=(prop) =>{
  const title="My Book";
  return <section className="book">
  
  <Image/>
  <h2>{prop.title}</h2>
  <p>{prop.h}</p>
  </section>
  }
const Image=() =>{return <img src="https://dummyimage.com/150x200.gif?text=book" />}
const Title=() =><p>My Message</p>

// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))