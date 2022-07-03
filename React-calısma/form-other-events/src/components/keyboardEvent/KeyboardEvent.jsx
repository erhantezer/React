import { useState } from "react"


const KeyboardEvent = () => {
const [input,setInput] = useState("")



const handleChange = (e)=>{
   setInput(e.target.value)
  
}



const handlePaste=(e)=>{
e.target.value += e.clipboardData.getData("text").toLowerCase();
e.target.style.border = '3px solid red';
e.target.style.backgroundColor = 'lightgreen';
e.preventDefault();
}


const handleAreaChange = (e)=>{
  if(!e.target.value) {
    e.target.style.border = '1px solid white';
    e.target.style.backgroundColor = 'white';
  }
}


  return (
    <div className='container text-center'>
          <h1 className='text-white'>CLIPBOARD EVENTS</h1>
          <input type="email" 
            className="form-control"
            id="email"
            required
            value={input}
            onChange={handleChange}
            onKeyDown={(e)=>setInput(e.target.value.toUpperCase())}
            />
            <div className="m-5 bg-success p-5 text-start rounded-2">
            <p onCopy={()=> alert('Dikkat Kopyandı')} className="text-start">{input}</p> 
            </div>               
           

          <textarea className='border border-5 border-warning rounded'
           name="" 
           id="" 
           cols="100" 
           rows="20"
           onPaste={handlePaste}
           onChange={handleAreaChange}
           >
          </textarea>
          
    </div>
  )
}

export default KeyboardEvent