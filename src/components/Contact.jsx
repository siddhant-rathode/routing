import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate()
  
const SubmitHandler = (e) => {
  e.preventDefault();
  //code to send data in to the database..., and redirect home page
  navigate("/")
  // navigate(-1)
  
}

  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={SubmitHandler}> 
        <button className='bg-red-500 text-white px-4 py-2 rounded-md'>submit</button>
      </form>
    </div>
  )
}

export default Contact