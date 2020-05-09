import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <CountButton text="click meeeeeeee!!!!!1!" />
      <InfoBar type="text" id="info" />
    </div>
  );
}

const myDate = new Date();

const Heading = (props) => {
  const time = myDate.getHours();
  return (
    <>
      <h1>Good day to you.</h1>
      <h2>The time is {time} hundred hours</h2>
    </>
  )
}

const CountButton = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{props.text}</button>
      <p>You have clicked the button {count} times</p>
    </>
  )
}

const InfoBar = (props) => {
  const [info, displayInfo] = React.useState("write something in the box above");
  const handleInput = (event) => {
    displayInfo(event.target.value)
  }
  return (
    <>
      <input type={props.type} id={props.id} onChange={handleInput} />
      <p>{info}</p>
    </>
  )
}


export default App;
