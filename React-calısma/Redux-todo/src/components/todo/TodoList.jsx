import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodo } from '../../redux/actions/todoAction';
import TodoItem from './TodoItem'

const TodoList = () => {
const dispatch =useDispatch();
const todoList = useSelector((state) => state.todoRed.todoList);

    const handleClear = () => {
        dispatch(clearTodo())
    }

  return (
    <div>

        <div>
            {todoList?.map((todo) => {
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