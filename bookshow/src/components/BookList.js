import React from 'react'
import BookShow from './BookShow'

function BookList({books, onDelete, onEdit}) {
  const renderedBooks = books.map((book) =>{
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  }) 
  return (
    <>
    <div className='place-items-center bg-[#EBE8E7] h-full min-h-screen'>
    <div className='w-full grid grid-cols-4 place-items-center'>{renderedBooks}</div>
    </div>
    </>
  )
}

export default BookList
