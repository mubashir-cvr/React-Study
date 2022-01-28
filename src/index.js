import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const books=[{
  id:1,
  img:"https://dummyimage.com/150x200.gif?text=book",
  title:"My Title from dict1",
  author:"Author"

},
{
  id:2,
  img:"https://dummyimage.com/150x200.gif?text=book",

  title:"My Title from dict2",
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

    const clickHandler = (e) =>{
      console.log(e);
      console.log(e.target);
      console.log("Clicked");

    }
    const complexExample=(author)=>{
      console.log(author)

    }

  const {img,title,author} = props
  return <section className="book" onMouseOver={()=>{
    console.log(title)

  }}>
  
  <Image/>
  <h2 onClick={()=>console.log("Inline Event")}>{title}</h2>
  <p>{author}</p>
  <button onClick={clickHandler}>Example</button>
  <button onClick={()=>complexExample(author)}>Argument fnction Button</button>
  </section>
  }
const Image=() =>{return <img src="https://dummyimage.com/150x200.gif?text=book" />}
const Title=() =><p>My Message</p>

// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))