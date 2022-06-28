import { useState } from "react";

const Form = () => {

const [username, setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


const handleUsername = (e) =>{
  console.log(e.target);
  setUsername(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(email !== "" && password !== "" && username !== "") {
 alert(
  ` username: ${username}
    email: ${email}
    password: ${password}
    `
  )
  }else{
    alert("new enter")
  }
 
  // setEmail("");
  // setPassword("");
  // setPassword("");
  e.target.reset();
}
  return (
    <div>
      <form style={{ margin: '5rem' }} className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username: <span className="text-warning">{username}</span>
           
          </label>
          <input type="text" className="form-control" id="username" onChange={handleUsername} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input type="email" className="form-control" id="email" onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-info">{password} </span>
          </label>
          <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;