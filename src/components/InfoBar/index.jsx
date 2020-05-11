
import React from 'react';

const InfoBar = (props) => {
  const [info, displayInfo] = React.useState('');
  const handleInput = (event) => {
    displayInfo(event.target.value)
  }
  return (
    <>
      <p>Type below to see some crazy shit</p>
      <input type={props.type} id={props.id} onChange={handleInput} />
      <p>{info}</p>
    </>
  )
}

export default InfoBar;