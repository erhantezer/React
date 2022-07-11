
import Form from "./components/forms/Form";
import FormObject from "./components/forms/FormObject";
import KeyboardEvent from './components/keyboardEvent/KeyboardEvent'
import MouseEvent from "./components/mouseEvent/MouseEvent";



function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-dark">

      <Form/>
      <FormObject/>
      <KeyboardEvent/>
      <MouseEvent/>
      
    </div>
  );
}

export default App;
