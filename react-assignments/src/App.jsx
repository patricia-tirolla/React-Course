import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import { MyAppNav } from "./Components/MyAppNav/MyAppNav";
import { Routes, Route } from "react-router";
import { MyHomeNav } from "./Components/Home/Home";


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

  return (
    <>
      <header>
        <h1>This is React</h1>
      </header>
      <Routes>
        <Route path="/" element={<MyHomeNav />}/>
        <Route path="characters" element={[<MyAppNav />, <EffectsComponent />]} />
        <Route path="form" element={[<MyAppNav />, <MyStateComponent />]} />
        <Route path="props" element={[<MyAppNav />, <PropsComponent person={person} />]} />
      </Routes>
    </>
  );
}

export default App;
