import React from 'react'
import { useState } from 'react'


const TodoInput = () => {
const [text, setText] = useState("");


const handleSubmit = () => {
    
}


  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input'
        placeholder='Add Todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type='submit' className='add-button'>Add</button>
    </form>
  )
}

export default TodoInput