import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const firtsbook={
  title:"My Title from dict",

}
function BookList(){
  
  return (
  <section className="booklist">
    <Book  title={firtsbook.title} h="Next Param">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo ducimus, fuga, porro sed deserunt est alias dolor dicta deleniti fugit, aspernatur quis blanditiis amet debitis reprehenderit itaque quia! Labore.</p>
    </Book>
    <Book title="My Title1" h="Next Param"/>
    <Book title="My Title2" h="Next Param"/>
    <Book title="My Title3" h="Next Param"/>
    
    
  </section>
  );
}

const Book=({title,h,children}) =>{
  
  return <section className="book">
  
  <Image/>
  <h2>{title}</h2>
  <p>{h}</p>
  {children}
  </section>
  }
const Image=() =>{return <img src="https://dummyimage.com/150x200.gif?text=book" />}
const Title=() =><p>My Message</p>

// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))