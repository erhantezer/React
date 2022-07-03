import React, { useState } from 'react';
import { FaAmazonPay } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";


const MouseEvent = () => {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();


const handleDoubleClick = (e) => {
  setToggle(!toggle);
  toggle ? (e.target.className="bg-warning text-light w-50 p-4 mt-4" )
  : (e.target.className="bg-success text-light w-50 p-4 mt-4")
}



const handleMove = (e) => {
setCoordX(e.pageX)
setCoordY(e.pageY)
console.log(e);
}



return (
  <div className='container text-center d-flex flex-column align-items-center mt-4'>
    <h2 className="text-danger mt-4">MOUSE EVENTS</h2>

    <div 
    id='todo-1' 
    className='bg-warning text-light w-50 p-4 mt-3' 
    onMouseEnter={()=> setVisible(true)}
    onMouseLeave={() => setVisible(false)}
    >
    
      Todo Item 1 <FaAmazonPay className='fs-1 text-danger'/>
      {visible && <span>This is a hint</span>}
    </div>

    <div 
    id='todo-2' 
    className='bg-warning text-light w-50 p-4 mt-4' 
    onDoubleClick={handleDoubleClick}
    >
      Todo Item 2 <FaCodepen className='fs-1 text-danger'/>
    </div>

    <div 
    id='todo-3' 
    className='bg-warning text-light w-50 p-4 m-4' 
    onMouseMove={handleMove}
    >
      Todo Item 3 <FaEvernote className='fs-1 text-danger'/>
    </div>


    <p className='text-info fs-2'>X and Y</p>
    <p className="text-danger fw-bold">
    {coordX} {coordY}
    </p>

  </div>
)
}

export default MouseEvent