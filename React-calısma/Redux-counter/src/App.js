import Counter from "./components/counter/Counter";
import { getStore } from "./redux";
import { Provider } from "react-redux"

function App() {
  const store =getStore();

  return (
    <div>
      <Provider store={store}>
        <Counter/>
      </Provider>
      
    </div>
  );
}

export default App;
