import React, { useContext } from "react";
import darkModeContext from "../../context/darkModeContext";

const NavBar = () => {

    const DarkModeContext = useContext(darkModeContext);
    const {dark,darkMode} = DarkModeContext;

  return (
  <nav className={`navbar navbar${dark?' -dark bg-dark' : '-light bg-light'}`}>
      <div className="container justify-content-end">
          <div className="d-flex">
            <button 
                className={`${dark?'btn btn-outline-light':'btn btn-outline-primary'}`}
                onClick={darkMode}
            >Dark</button>
          </div>
      </div>
  </nav>
  );
};

export default NavBar;
