import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const books=[{
  id:1,
  img:"https://dummyimage.com/150x200.gif?text=book",
  title:"My Title from dict",
  author:"Author"

},
{
  id:2,
  img:"https://dummyimage.com/150x200.gif?text=book",

  title:"My Title from dict",
  author:"Author"


}]
function BookList(){
  
  return (
  <section className="booklist">
    {books.map((book,index)=>{
      const {img,title,author}=book
      return <Book key ={book.id} {...book}></Book>
    })}
  </section>
  );
}

const Book=(props) =>{
  //Attribute, eventHandler
  // onClick ,onMouseHover

    const clickHandler = () =>{
      alert("Clicked")

    }

  const {img,title,auth} = props
  return <section className="book">
  
  <Image/>
  <h2 onClick={()=>console.log("Inline Event")}>{title}</h2>
  <p>{auth}</p>
  <button onClick={clickHandler}>Example</button>
  </section>
  }
const Image=() =>{return <img src="https://dummyimage.com/150x200.gif?text=book" />}
const Title=() =><p>My Message</p>

// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))