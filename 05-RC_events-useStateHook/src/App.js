import Counter from "./classComponent/Counter";
import Events from "./event-intro/Events";
import UseStateExample from "./hooksState/UseStateExample";

function App() {
  return (
    <div>
      <Events/>
      <Counter count={10}/>
      <Counter />
      <UseStateExample/>
    </div>
  );
}

export default App;
