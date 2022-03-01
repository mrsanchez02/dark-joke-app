import React, { useContext } from "react";
import darkModeContext from "../context/darkModeContext";

const JokeCard = ({joke,refresh}) => {

  const DarkModeContext = useContext(darkModeContext);
  const { dark } = DarkModeContext;

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className={`card text-center ${dark? 'bg-dark text-white': null }`} style={{width: '24rem'}}>
        <div className="card-header">Joke Generator</div>
        <div className="card-body">
          <h5 className="card-title">🎭</h5>
          <p className="card-text">
            {joke?.joke}
          </p>
          
        </div>
        <div className="card-footer">
        <button onClick={refresh} className={`${dark?'btn btn-outline-light':'btn btn-primary'}`}>
            Giveme another
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;
