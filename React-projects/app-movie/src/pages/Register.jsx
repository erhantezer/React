import React, { useState } from 'react'

const Register = () => {
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

const handleSubmit = (e) => {
e.preventDefault();
console.log(firstName,lastName,email,password);
}

  return (
    <div className='d-flex justify-content-center'>
    <div className='form-image d-none d-md-block mt-2'>

      <img 
      className='border border-2 border-danger rounded-pill ms-2' 
      src={"https://picsum.photos/700/700"} alt="sample-movie" />

    </div>
    <div className='container ms-5 mt-2'>
       <h1 className='form-title display-3 mb-4 text-danger'>Register</h1>
      <form id="register" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label 
          htmlFor="firstname" 
          className="form-label fw-bold mb-4"

          >First Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="firstname" 
          placeholder='Enter  first name'
          required
          onChange={(e) => setFirstName(e.target.value)}
          />
            
        </div>
        <div className="mb-3">
          <label 
          htmlFor="lastname" 
          className="form-label fw-bold mb-4"

          >Last Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="lastname" 
          placeholder='Enter  last name'
          required
          onChange={(e) => setLastName(e.target.value)}
          />
            
        </div>
        <div className="mb-3">
          <label 
          htmlFor="email" 
          className="form-label fw-bold mb-4"

          >Email address </label>
          <input 
          type="email" 
          className="form-control" 
          id="email" 
          placeholder='Enter  email'
          required
          onChange={(e) => setEmail(e.target.value)}
          />
            
        </div>
        <div className="mb-3">
          <label 
          htmlFor="password" 
          className="form-label fw-bold mb-4"
          
          >Password</label>
          <input 
          type="password" 
          className="form-control" 
          id="password"
          placeholder='Enter password'
          required
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <input type="submit" className='btn btn-info form-control text-white fw-bold' value={"Register"} />
      </form>
    </div>
    </div>
  )
}

export default Register