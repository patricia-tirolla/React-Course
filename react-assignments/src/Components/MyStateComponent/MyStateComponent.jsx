import React, { useState } from "react"
import "./MyStateComponent.css"

const MyStateComponent = (props) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputAgeValue, setInputAgeValue] = useState("");
  const [showResults, setShowResults] = useState(false);

  // const handleInputNameValue = (event) => {
  //   setInputNameValue(event.target.value);
  // }

  // const handleInputAgeValue = (event) => {
  //   setInputAgeValue(event.target.value);
  //}

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
    console.log(`Form submited with name: ${inputNameValue} and age: ${inputAgeValue} years old`)
  }

  return (
    <div className="my-state-component-container">
      <h2>My State Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={(e) => setInputNameValue(e.target.value)} />
        </label>

        <label>
          Age:
          <input type="number" onChange={(e) => setInputAgeValue(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {showResults && (
        //is that how I send the state as props?
        <ResultsContainerComponent name={inputNameValue} age={inputAgeValue}/>
      )}
    </div>
  );
};

function ResultsContainerComponent (props) {
  
  return (
    //how do I send my state component as a prop?
    <div className="results-container">
        <h3>{props.name},</h3>
        <p>You are {props.age} years old.</p>
      </div>
  )
}

export default MyStateComponent;
