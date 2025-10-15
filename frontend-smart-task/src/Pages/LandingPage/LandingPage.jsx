
import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";

const LandingPage = () => {

  const [text, setText] = useState()
  const [updater, setUpdater] = useState()

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  const buttonOnClick = () => {
    setUpdater(text)
  }

  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-4xl font-bold">
            <Link to="/auth">This is the Landing Page    ¡Go to AUTH!</Link>
        </div>
        
        {/*
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto Input: {text} </p>
        <p>Texto Actualizado: {updater}</p>
          */}  
    </div>
    );
};
export default LandingPage;