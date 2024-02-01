import React from 'react'
import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList';
import Header from './components/Header';


function App() {

  const [books, setBooks]=useState([]);

  const editBookbyId = (id, newTitle) =>{
     const updatedBooks = books.map((book)=>{
      if(book.id===id){
        return{...book, title:newTitle};
      }
      return book;
     })
     setBooks(updatedBooks);
  }

  const deleteBookbyId = (id) =>{
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const handleCreateBook = (title)=>{
    const updatedBooks=[
      ...books,
      {id: Math.random(Math.random()*9999) ,
       title}
    ]
    setBooks(updatedBooks);
  }

  return (
    <div>
      <Header/>
      <BookCreate onCreate={handleCreateBook} className="bottom-0" />
      <BookList books={books} onDelete={deleteBookbyId} onEdit={editBookbyId}/>
    </div>
  )
}

export default App
