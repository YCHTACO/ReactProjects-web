import './App.css';
import { useState } from "react"

function App() {
  const [userInput,setUserInput] = useState("AAA");
  /*function inputHadler(e){
    console.log(e);
    setUserInput(e.target.value);
  }*/
  const [isRed, setIsRed] = useState(false);
  let outPutClassName = "";
  if(isRed){
    outPutClassName = "is-red";
  }

  return (
    <div className="App">
      <h1>React state</h1>
      <h2 className={outPutClassName}>Show input value : {userInput}</h2>
      <h2>Show input value : {`${isRed}`}</h2>
      <input type="test" onInput={e =>setUserInput(e.target.value)}/> 
      <p>Check to highLight
        <input type="checkbox" onChange={e => setIsRed(e.target.checked)}/>
      </p>


    </div>
  );
}

export default App;
