import React from 'react';
import { useState,useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import NotFound from './NotFound';
// import {useLocation} from 'react-router-dom';

const InstructorsDetail = () => {
    const navigate=useNavigate()
    const {id} = useParams();
    const [inst, setInst] = useState(null);
    const[error, setError] =useState(false)
    // const location =useLocation()
    // const inst =ulocation.state

     useEffect(() =>{
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if(!res.ok){
            setError(true)
            throw new Error('something went wrong')
          }
          return res.json()
        })
         
        .then((data) => setInst(data))
        .catch((err) => console.log(err));
    }, [id] );




    if(error){
      return <NotFound/>
    }else if(!inst){
        return(
          <div className='text-center'>
          <h1>Data is Fetching</h1>
        </div>
        )
    }
    else{
      return (
    
        <div className='container text-center'>
          <h3>{inst.name}</h3>
          <img 
          className='w-50' 
          src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} 
          alt="" style={{cursor:'pointer'}}/>
          <h4>{inst.email}</h4>
          <h4>{inst.phone}</h4>
          <div>
            <button 
            onClick={()=>navigate('/')} 
            className='btn btn-success m-2'>Home</button>  
            <button 
            onClick={()=>navigate(-1)} 
            className='btn btn-danger m-2'>Go Back</button>  
          </div>
          
      </div>
      
      
    )
    }


 
}

export default InstructorsDetail