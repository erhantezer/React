import "./Todo.css"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

const Todo = () => {
  return (
    <div className="app">
        <h1>Todo With Redux</h1>
        <TodoInput/>
        <TodoList/>
    </div>
  )
}

export default Todo