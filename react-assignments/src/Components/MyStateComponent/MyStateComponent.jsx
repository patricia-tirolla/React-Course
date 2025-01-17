import React, { useState } from "react"
import "./MyStateComponent.css"

const MyStateComponent = () => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputAgeValue, setInputAgeValue] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleClearButton = () => {
    setInputNameValue("")
    setInputAgeValue("");
    setShowResults(false);
  }

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
          <input type="text" value={inputNameValue} onChange={(e) => setInputNameValue(e.target.value)} />
        </label>

        <label>
          Age:
          <input type="number" value={inputAgeValue} onChange={(e) => setInputAgeValue(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClearButton}>Clear</button>
      </form>
      {showResults && (
        <ResultsContainerComponent name={inputNameValue} age={inputAgeValue}/>
      )}
    </div>
  );
};

function ResultsContainerComponent (props) {
  return (
    <div className="results-container">
        <h3>{props.name},</h3>
        <p>You are {props.age} years old.</p>
      </div>
  )
}

export default MyStateComponent;
