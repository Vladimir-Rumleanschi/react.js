import React, {useState,useCallback} from 'react';

import Demo from "./components/Demo/Demo";
import './App.css';
import Button from "./components/UI/Button/Button";
function App() {

  const [showParagraph,setShowParagraph] =  useState(false);
  const [allowToggle,setAllowToggle] = useState(false);
  console.log('App Runing');

  const toggleParagraphHandler =useCallback(() => {
    if(allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  },[allowToggle]);

  const allowToggleHandler = () =>  {
    setAllowToggle((prevAllowState) => !prevAllowState);
  };

  return(
    <div className="app">
      <h1>Hi there!</h1>
        <Demo show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
