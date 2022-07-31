import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import toastifySuccess from "./utils/toastify";



const App = () => {
const [input, setInput] = useState("");
const [allInput, setAllInput] = useState(JSON.parse(localStorage.getItem("Tasks")) || [])



const handleClick = () => {
  if(input !== ""){
    setAllInput([...allInput, input]);
    toastifySuccess("Todo added")
  }else {
    toastifySuccess("Please enter a text")
  }

setInput("")
}
// console.log(allInput);

//? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.👇👇
useEffect(() => {
  localStorage.setItem("Task", JSON.stringify(allInput))
}, [allInput])


//* silme işlemi
const handleDelete = (id) => {
  const filterItems = allInput.filter((item,index) => {
    return id !== index
  })
  setAllInput(filterItems)
  toastifySuccess("Deleted successful")
}


//* edit işlemi 
const handleEdit = (id) => {
  const filterItem = allInput.filter((item,index) => {
    return id === index
  })
setInput(filterItem);
handleDelete(id)
}


  return (
    <div className="container border">
      <div className="row">
        <div className="col-sm-6 mx-auto mt-5 p-3 text-center border">
          <h2 className="display-6">TODO APP</h2>
        
        <div className="d-flex gap-4 mb-4">
          <input 
          type="text" 
          className="form-control text-capitalize mt-1"
          name="add-todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button 
          className="btn btn-success px-3 fw-bold"
          onClick={handleClick}
          >
            ADD
          </button>
        </div>
       
        </div>
        <ul className="list-group text-center">
          {allInput?.map((item, index) => {
            return (
              <Todos
              key={index}
              id={index}
              item={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              />
            )
          })}
            
          </ul>
      </div>
      
    </div>
  );
}

export default App;


