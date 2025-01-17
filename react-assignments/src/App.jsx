import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };
  const data = {
    name: "",
    age: 0,
  }

  return (
    <div>
      <header>
        <h1>This is React</h1>
        <MyStateComponent name={data.name} age={data.age}/>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
    </div>
  );
}

export default App;
