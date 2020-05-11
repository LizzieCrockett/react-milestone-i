import React from 'react';

const CountButton = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{props.text}</button>
      <p>I am going to send you {count} spam emails every day</p>
    </>
  )
}

export default CountButton;