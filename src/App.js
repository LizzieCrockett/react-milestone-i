import React from 'react';
import './App.css';
import Heading from './components/Heading';
import CountButton from './components/CountButton';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <CountButton text="click meeeeeeee!!!!!1!" />
      <InfoBar type="text" id="info" />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
