import { useState } from "react"


const AddTaskForm = ({tasks,setTasks}) => {
// const {id,text,day:newday,isDone} =tasks
console.log(tasks);
const [task, setTask] = useState("")
const [day, setDay] = useState("")

const handleSubmit = (e) => {
e.preventDefault();
const id = new Date().getTime();
const newTask = {id:id,task:task,day:day,isDone:false};

setTasks([...tasks,newTask]);
setTask("");
setDay("");
}





  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="form-control">

        <label htmlFor="text">Task</label>
        <input 
        type="text" 
        name="text" 
        placeholder="add task" 
        value={task} 
        onChange={(e)=>setTask(e.target.value)} />
      </div>

      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input 
        type="date" 
        name="day" 
        placeholder="" 
        value={day} 
        onChange={(e)=>setDay(e.target.value)} />
      </div>
        
        <button type="submit" className="btn btn-submit">Submit</button>

      </form>
    </div>
  )
}

export default AddTaskForm
