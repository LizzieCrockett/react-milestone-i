import React from 'react';
import './CountKitty.css'

const CountKitty = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p id="stroke">Stroke the cute kitty</p>
      <button onMouseOver={() => setCount(count + 1)}><img src='https://cutt.ly/hynsz44'
        alt="cute kitty" width="120" height="91.5"/></button>
      {count > 0 ?
        <p id="spam">You have now consented to receiving {count} spam emails every day</p>
        : null
      }
    </>
  )
}

export default CountKitty;