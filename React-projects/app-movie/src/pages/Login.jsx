import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
console.log(email,password);
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='form-image d-none d-md-block mt-2'>
        <img className='border border-2 border-danger rounded-pill' src={"https://picsum.photos/700/700"} alt="sample-movie" />
      </div>
    <div className='container ms-5 mt-5'>
      <h1 className='form-title display-3 mb-5 text-danger'>Login</h1>
      <form id='login' onSubmit={handleSubmit} >
       <div className="mb-3">
          <label 
          htmlFor="email" 
          className="form-label mb-3"

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
          className="form-label mb-3"
          
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
        
        <input type="submit" className='btn btn-info form-control text-white fw-bold mt-4' value={"Register"} />
      </form>
      <button className='btn btn-info form-control mt-4 text-white fw-bold'>Continue with Google</button>
    </div>
    </div>
  )
}

export default Login