import React, {useState} from 'react';

import Demo from "./components/Demo/Demo";
import './App.css';
import Button from "./components/UI/Button/Button";
function App() {

  const [showParagraph,setShowParagraph] =  useState(false);

  console.log('App Runing');

  const toggleParagraphHandler =()=> {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return(
    <div className="app">
      <h1>Hi there!</h1>
        <Demo show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
