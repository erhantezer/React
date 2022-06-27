import Counter from "./2-classComponent/Counter";
import Events from "./1-event-intro/Events";
import UseStateExample from "./components/3-hooksState/UseStateExample";


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
