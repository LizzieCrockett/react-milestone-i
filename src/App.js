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

      <CountKitty />

      <MirrorBar type="text" id="info" />

      <Form id="reg_form" />

      <Footer />
    </div>
  );
}

export default App;
