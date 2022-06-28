import { useState } from "react";

const FormObject = () => {

const [formValues, setFormValues] = useState({
    username:"",
    email: "",
    password: ""
})



// const handleUsername = (e) =>{
//   // console.log(e.target);
//   setUsername(e.target.value)
// }

const handleSubmit = (e) => {
  // e.preventDefault();
 const {username, password,email} = formValues
  alert(
  ` username: ${username}
    email: ${email}
    password: ${password}
    `
  )
}

const handleFormValues = (e) => {
// console.log(e.target.id);
setFormValues({...formValues,[e.target.id]: e.target.value})

}

  return (
    <div>
      <form style={{ margin: '5rem' }} className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username: <span className="text-warning">{formValues.username}</span>
           
          </label>
          <input type="text" className="form-control" id="username" onChange={handleFormValues} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">{formValues.email}</span>
          </label>
          <input type="email" className="form-control" id="email" onChange={handleFormValues} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-info">{formValues.password} </span>
          </label>
          <input type="password" className="form-control" id="password" onChange={handleFormValues} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;