import React from 'react';
import './App.css';
import Heading from './components/Heading';
import CountButton from './components/CountButton';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';
import Form from './components/Form';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import BonusContent from './components/BonusContent';

function App() {

  return (
    <div className="App">
      <Heading />
      <CountButton text="click meeeeeeee!!!!!1!" />
      <InfoBar type="text" id="info" />
      <hr />
      <Form id="reg_form">
        <div><Input id="name" type="text" label="name" required="required" />
          <Input id="email" type="email" label="email" required="required" />
          <Input id="password" type="password" label="password" required="required" /> </div>
        <div> <Input id="favecolour" type="text" label="favourite colour" />
          <Input id="luckynumber" type="number" label="lucky number" /></div>
        <SubmitButton id="submit" label="submit" />
      </Form>
      <BonusContent />



      <hr />
      <Footer />
    </div>
  );
}

export default App;
