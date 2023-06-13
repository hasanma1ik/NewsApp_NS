import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <nav className={`navbar btn btn-success navbar-expand-lg ${darkMode ? "bg-dark" : "bg-light"}`}>
        <div className="container-fluid">
          <Link className= {`navbar-brand ${darkMode ? "text-white" : "text-dark"} custom-class`} to="/"><i>NewsSynthesis</i></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${darkMode ? "text-white" : "text-dark"}`} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${darkMode ? "text-white" : "text-dark"}`} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/sports">Sports</Link>
              </li>
            </ul>
            
            <button onClick={() => setDarkMode(!darkMode)} className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;


