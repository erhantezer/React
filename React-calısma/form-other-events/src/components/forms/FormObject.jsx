import {useState} from 'react';

const FormObject = () => {
const [formvalue,setformValue] = useState({
  username:"",
  email:"",
  password:"",
})


const handleValue = (e) => {

  setformValue({...formvalue,[e.target.id]:e.target.value})
  console.log(e.target.id);
  console.log(e.target.value);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  const {username,email,password}=formvalue
 alert(`
 username:${username}
 email:${email}
 password:${password}
 `)
 setformValue({email:"",username:"",password:""})
}


  return (
    <div className='container text-center m-5 w-50 bg-danger p-5 border border-info border-5 rounded-pill '>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">

                    <label forHtml="username" className="form-label">Username</label>
                    <input type="text"
                           className="form-control "
                           id="username"
                           required
                           value={formvalue["username"]}
                           onChange={handleValue}
                           />
                    
                </div>

                <div className="mb-3">

                    <label forHtml="email" className="form-label ">Email</label>
                    <input type="email" 
                           className="form-control"
                           id="email"
                           required
                           value={formvalue.email}
                           onChange={handleValue}
                           />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    Password
                     </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    value={formvalue.password}
                    onChange={handleValue}
                    />
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
  )
}

export default FormObject