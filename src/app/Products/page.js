'use client'
import React from 'react'
import { useState,useRef } from 'react';
const Products = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  }
   async function handleSubmit() {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server
    try {
        await sendContactData({
          email: nameInputRef,
          name: nameInputRef,
          message: messageInputRef ,
        });
    }catch(e){

    }
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Focus on the name input after submission
    nameInputRef.current.focus();
  };
  
  return (
    <div className='flex flex-col justify-between items-center w-full bg-white'>
<div className='flex items-start'>
<img
            src="./logo-black.svg"
            className="   w-[20rem] py-10 "
          />

</div>
<div className='flex items-end'>
<form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              ref={nameInputRef}
              className="w-full p-2 border border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              ref={emailInputRef}
              className="w-full p-2 border  border-black rounded-md"
              required
            />
          </div>
          
          <button
            type="submit"
            className="  hover:bg-blue-600 transition duration-300 bg-black px-10 py-3 rounded-3xl text-white"
          >
            Submit
          </button>
        </form>
</div>
    </div>
  )
}

export default Products