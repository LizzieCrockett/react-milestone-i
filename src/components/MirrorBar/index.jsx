
import React from 'react';
import './MirrorBar.css';

const MirrorBar = ({type, id}) => {
  const [userInfo, displayInfo] = React.useState('');
  const handleInput = (event) => {
    displayInfo(event.target.value)
    console.log(event.target.value)
  }
  return (
    <>
      <p id="typein">Type in the box below and I'll repeat after you.</p>
      <input type={type} id={id} onChange={handleInput} />
      <p id="reply">{userInfo}</p>
    </>
  )
}

export default MirrorBar;