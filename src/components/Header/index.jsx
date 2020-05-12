import React from 'react';
import Clock from '../Clock';
import './Header.css';

const Header = (props) => {
  return (
    <>
      <h1 id="greeting">Good day to you.</h1>
      <h2 id="clock">The time is <Clock /></h2>
    </>
  )
}

export default Header;