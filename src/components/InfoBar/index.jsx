
import React from 'react';

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

  export default InfoBar;