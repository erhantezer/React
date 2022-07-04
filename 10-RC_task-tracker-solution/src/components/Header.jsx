import { useState } from 'react';
import AddTaskForm from './AddTaskForm';

const Header = ({tasks,setTasks}) => {
const [show, setShow] = useState(false);
const [btnstyle, setBtnStyle] = useState({name:"SHOW ADDTASK BAR",bgColor:"purple"});
console.log(tasks);

const handleShow = () => {
  setShow(!show);

  if(show){
setBtnStyle({
  name:"SHOW ADDTASK BAR",
  bgColor:"purple"
})
  }else{
setBtnStyle({
  name:"CLOSE ADDTASK BAR",
  bgColor:"red"
})
  }
}
console.log(show);

  return (
  <header className='header'>
    <h1>TASK TRACKER</h1>
    <button 
    className='btn' 
    onClick={handleShow}  
    style={{backgroundColor:btnstyle.bgColor}}>{btnstyle.name}</button>
    {show && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
  </header>
  )
};

export default Header;
