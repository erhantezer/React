import { Provider } from "react-redux";
import Todo from "./components/todo/Todo";
import { getStore } from './redux';
import "./App.css"

function App() {
const store = getStore()

  return (
    <div className="app">
      <Provider store={store}>
        <Todo/>
      </Provider>
      
    </div>
  );
}

export default App;
