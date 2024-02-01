import React from 'react'
import { useState } from 'react'
function BookEdit({book, onSubmit}) {
    const[title, setTitle]=useState(book.title);

    const handleChange = (event) =>{
      setTitle(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(book.id, title)
    }

  return (
    <>
    <div className=''>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={handleChange} value={title} className='w-44 bg-slate-300 rounded-lg'/>
        <button className=''>Save</button>
      </form>
    </div>
    </>
  )
}

export default BookEdit
