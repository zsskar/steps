import React, { useState } from 'react';
import './App.css';

function App() {

  const msgs = [
    "This is First Message !",
    "This is Second Message !",
    "This is Third Message !"
  ];

  const [msg, setMsg] = useState(msgs[0]);
  let [step,setStep] = useState(0);

  function next(){
    step = step + 1;
    setStep(step);
    setMsg(msgs[step]);
  }

  function prev(){
    step = step - 1;
    setStep(step);
    setMsg(msgs[step]);
  }

  return (
    <>
    <div className='header'>
      <h2 className='text'>Steps</h2>
    </div>
    <div className="steps">
      <div className="number">
        <div style={step >=0 ? {backgroundColor: '#7950f2',color:'white'} :{backgroundColor: '#799', color:'black'}}>1</div>
        <div style={step >=1 ? {backgroundColor: '#7950f2',color:'white'} :{backgroundColor: '#799',color:'black'}}>2</div>
        <div style={step >=2 ? {backgroundColor: '#7950f2',color:'white'} :{backgroundColor: '#799',color:'black'}}>3</div>
      </div>

      <p className="message">{msg}</p>

      <div className="buttons">
        <button style={step !==0 ? {backgroundColor: '#7950f2',color:'white'} :{color:'black'}} disabled={step === 0} onClick={prev}><span>&larr;</span> Previous</button>
        <button style={step < msgs.length - 1 ? {backgroundColor: '#7950f2',color:'white'} :{color:'black',backgroundColor :'#cccccc'}} disabled={step === msgs.length - 1} onClick={next}>Next <span>&rarr;</span></button>
      </div>
    </div>
    </>
  );
}

export default App;
