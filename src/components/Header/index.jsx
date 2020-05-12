import React from 'react';
import Clock from '../Clock';

const Header = (props) => {
  return (
    <>
      <h1>Good day to you.</h1>
      <h2>The time is <Clock /></h2>
    </>
  )
}

export default Header;