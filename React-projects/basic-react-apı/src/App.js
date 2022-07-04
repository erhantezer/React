
import { useState } from 'react';
import './App.css'
// import LifeCycleMethods from './components/LifeCycleMethods';
// import Timer from './components/Timer';

import Users from './components/Users';



function App() {
  const [show,setShow] =useState(true);

  return (
    <div className='container text-center mb-5'>
      <button className='btn btn-danger m-5' onClick={() => setShow(!show)}>{show ? 'Hide':'Show'}</button>
    
     {show && <Users/>} 
    </div>
  );
}

export default App;
