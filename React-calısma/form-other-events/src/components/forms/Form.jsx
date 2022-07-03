import  { useState } from 'react'

const Form = () => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] =useState("");


const handleEmail=(e)=>{
    setEmail(e.target.value)
    console.log(e.target.value);
}

const handleSubmit =(e)=>{
    e.preventDefault()
    alert(`
    username: ${username}
    email: ${email}
    password: ${password} 
    `)
    setEmail("")
    setUsername("")
    setPassword("")
}

    return (
        <div className='container text-center m-5 w-50 bg-warning p-5 border border-danger border-5 rounded-pill '>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">

                    <label forHtml="username" className="form-label">Username</label>
                    <input type="text"
                           className="form-control text-danger"
                           id="username"
                           required
                           value={username}
                           onChange={(e)=> setUsername(e.target.value) }
                           />
                    
                </div>

                <div className="mb-3">

                    <label forHtml="email" className="form-label ">Email</label>
                    <input type="email" 
                           className="form-control text-danger"
                           id="email"
                           required
                           value={email}
                           onChange={handleEmail}
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
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form