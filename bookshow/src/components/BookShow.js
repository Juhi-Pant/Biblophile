import React from 'react'
import { useState } from 'react';
import BookEdit from './BookEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
function BookShow({book, onDelete, onEdit}) {

  const[edit, setEdit]=useState(false);
  const[handleEdit, setHandleEdit]=useState(false);

  const handleDeleteClick = () =>{
    onDelete(book.id);
  };

  const handleEditClick=()=>{
     setEdit(!edit);
     setHandleEdit(!handleEdit);
  };

  const handleSubmit = (id, newTitle) =>{
    setEdit(false);
    onEdit(id, newTitle)
  }

  let content = <h3>{book.title}</h3>;
  if(edit){
    content = <BookEdit book={book} onSubmit={handleSubmit}/>
  }

  return (
    <div className='h-56 shadow-lg w-52 relative mt-6'>
      <img src="https://picsum.photos/200" alt="" className='h-32 mx-auto mt-6'/>
      <div className='flex items-center justify-center'>
      <div className='h-8 w-full'>
      <div className='text-[#7A77B9] text-xl text-center'>{content}</div></div>
      </div>
      <div className='flex space-x-4 justify-end mr-2 absolute bottom-2 right-0'>
      <div onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} style={{color: "#F2C76E", height: "18"}} className='hover:h-22'/></div>
      <div onClick={handleEditClick} onEdit={onEdit}><FontAwesomeIcon icon={faPenToSquare} style={{color: "#F2C76E", height: "18"}} /></div>
      </div>
    </div>
  )
}

export default BookShow
