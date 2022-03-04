// import { Book } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
//css
import "./index.css"
import {data} from "./books"
import Book from './Book';
import { greeting } from './testing/testing';
//setup vars


const BookList = () =>{
  console.log(greeting)
  return(
    
    <section className='booklist'>
     {data.map((book)=>{
       return (<Book key={book.id} {...book}></Book>
       )                            //1.book={book}
     })}
    
    </section>
    
  )
}
// destructuring 
 
//normal 
// const Book = (props) => {

//   console.log(props)
//   return (

//   <article  className='book'>
//     <img src={props.img} alt="" />
//     <h1>{props.title}</h1>
//     <h4> {props.author}</h4> 
    
//   </article>
//   )
// }



ReactDOM.render(
  <React.StrictMode>
   <BookList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

