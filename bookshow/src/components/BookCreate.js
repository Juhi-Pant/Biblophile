import React from 'react'
import { useState } from 'react';

function BookCreate({ onCreate }) {

    const [title, setTitle]=useState('');

    const handleChange = (event) => {
       setTitle(event.target.value);
    };

    const handleSubmit = (event) =>{
       event.preventDefault()
       onCreate(title);
    }
  return (
    <>
    <div className='bg-[#7A77B9] h-40 w-full flex flex-col justify-center items-center'>
    <div className='text-[#F2C76E] font-bold text-3xl font-[Oranienbaum]'>Add a Book</div>
    <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-2'>
        <label htmlFor="" className='text-[#F2C76E] font-[Vollkorn] text-2xl'>Title</label>
        <input type="text" value={title} onChange={handleChange} className='w-52 rounded-md '/>        
        <button className='bg-[#F2C76E] w-1/2 rounded-lg text-[#7A77B9] text-lg'>Create</button>
    </form>
    </div>
    </>
  )
}

export default BookCreate
