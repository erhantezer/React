import React from 'react'
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/actions/todoAction';

const TodoItem = ({completed, text, id}) => {
const dispatch = useDispatch();

const styled ={

    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
};


const handleToggle = () => {
    dispatch(toggleTodo())
}

const handleDelete = () => {
    dispatch(deleteTodo())
}

  return (
    <div style={styled} className="todo-list" key={id}>
        <h2 className='todoText'>{text}</h2>
        <div>
            <span>
                <img 
                src={okLogo} 
                alt="ok-logo" 
                className='ok-logo'
                onClick={handleToggle}
                />
            </span>
            <span>
                <img 
                src={deleteLogo} 
                alt="delete-logo" 
                className='delete-logo'
                onClick={handleDelete}
                />
            </span>
        </div>

    </div>
  )
}

export default TodoItem