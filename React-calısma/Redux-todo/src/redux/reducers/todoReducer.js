
import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from '../types/todoType';

const initialState = {
    todoList : [
        {id: new Date().getTime(), text:"Work On Redux", completed: true},
    ],
};

// rxreducer

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return { 
        todoList:[
            ...state.todoList, { id: new Date().getTime(), text: payload, completed: false },
        ],
    }
  case TOGGLE_TODO:
    return { ...state, ...payload }

  case DELETE_TODO:
    return { ...state, ...payload }

  case CLEAR_TODO:
    return initialState;
    
  default:
    return state
  }
}
export default todoReducer;