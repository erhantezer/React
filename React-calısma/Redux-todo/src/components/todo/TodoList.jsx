import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {


    const handleClear = () => {
        
    }

  return (
    <div>

        <div>
            {[]?.map((todo) => {
                return (
                    <TodoItem key={todo.id} {...todo}/>
                )
            })}
        </div>

        <div className='clear-wrapper'>
            <button className='clear-button' onClick={handleClear}>
                Clear
            </button>
        </div>
        
    </div>
  )
}

export default TodoList