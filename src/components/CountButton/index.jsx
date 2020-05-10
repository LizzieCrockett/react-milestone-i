import React from 'react';



const CountButton = (props) => {
    const [count, setCount] = React.useState(0);
    return (
      <>
        <button onClick={() => setCount(count + 1)}>{props.text}</button>
        <p>You have clicked the button {count} times</p>
      </>
    )
  }

  export default CountButton;