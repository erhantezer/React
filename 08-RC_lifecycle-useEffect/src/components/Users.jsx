import React, { useState, useEffect } from 'react'

const Users = () => {
const [users, setUsers] = useState()

const getUsers = () => {
 fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json())
.then((data) =>setUsers(data) )
}

useEffect(() => {
  //? ComponentDidMount
getUsers();
}, [])

// console.log(users);
// console.log(data);

// setUsers([...data,{name,username,email}])
// const {id,} =users





  return (
    <div>
        <h1 className='mb-5 display-4'>USER LIST</h1>
        {/* <button className='btn btn-info' onClick={getUsers}>Get Users</button> */}
        <div className="container">
            <div className="row gap-2 justify-content-center">
                {users && users.map((item,index) => {
                    return(
                        <div key={index} className='col col-m-6 col-lg-4 col-xl-3   bg-warning rounded'>
                       <img  className="rounded-circle mt-3 w-50" src = {`https://i.pravatar.cc/300?img=${index}`} alt="" />
                        <h2>{item.name}</h2>
                        <h4>{item.username}</h4>
                        <h6>{item.email}</h6>
                       
                        
                        </div>
                    )
                })}
              
            </div>
        </div>
    </div>
  )
}

export default Users