import React from "react"


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

  export default Book