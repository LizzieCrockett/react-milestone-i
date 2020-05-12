
import React from 'react';
import './MirrorBar.css';

const MirrorBar = (props) => {
  const [info, displayInfo] = React.useState('');
  const handleInput = (event) => {
    displayInfo(event.target.value)
    console.log(event.target.value)
  }
  return (
    <>
      <p>Type in the box below and I'll repeat after you.</p>
      <input type={props.type} id={props.id} onChange={handleInput} />
      <p id="reply">{info}</p>
    </>
  )
}

export default MirrorBar;