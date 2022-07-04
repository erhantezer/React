import { useState, useEffect } from "react"



const Users = () => {
const [users, setUsers] = useState([]);

const getUsers=()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=> res.json())
  .then((data)=>setUsers(data));
}

useEffect(()=>{
  getUsers()
},[])


  return (
    <div className="container">
      <h1>USER LIST</h1>
      <div className="row">
        {users.map((user)=>{
          const {id,name} =user
          return(
            <div className="col" key={id}>
              <img className="rounded-pill mt-5" src={`https://i.pravatar.cc/300?img=${id}`} alt={name} />
              <h5>{name}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Users