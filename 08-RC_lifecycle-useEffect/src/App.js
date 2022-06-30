import LifeCycleMethods from './components/LifeCycleMethods';
import {useState} from 'react'

function App() {
  const [show, setShow] = useState(true)
console.log(show);
  return (
    <div className="container text-center mt-5">
      <button className='btn btn-dark' onClick={()=>setShow(!show)}>
       { show ? "Hide":"Show"}
        </button>

      {/* conditional rendering  (Short-circuit)*/}
      {show && <LifeCycleMethods />}
      
    </div>
  );
}

export default App;
