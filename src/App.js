import React from 'react';
import './App.css';
import Header from './components/Header';
import CountKitty from './components/CountKitty';
import MirrorBar from './components/MirrorBar';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <Header />
      <hr />
      <CountKitty />
      <hr />
      <MirrorBar type="text" id="info" />
      <hr />
      <Form id="reg_form" />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
