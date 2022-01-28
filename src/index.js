import React from "react"
import ReactDOM from "react-dom"

import './index.css'
import {books} from './books.js'
import Book from './Book.js'

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
// const  BookList =()=> {
//   return React.createElement('div',{},React.createElement('h1',{},'Hi'))
  
// }

ReactDOM.render(<BookList/>,document.getElementById("root"))