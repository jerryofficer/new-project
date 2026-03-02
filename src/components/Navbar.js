import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);

  const handleToggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');


    if (isDarkMode) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      if (navbar) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
      }
    } else {

      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      if (navbar) {
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
      }
    }
  }, [isDarkMode]);














  return (
    <>
   
     
     
       
      

     
      <div  className="container-fluid">

      
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
           
            <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink 
                    className="nav-link dropdown-toggle"
                    to="/Products"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                   
                  >
                    Products
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/Women">
                        Women
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Men">
                        Men
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Kids">
                        Kids
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Context">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/6543/6543058.png"
                      width={32}
                      alt="User Icon"
                    />
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/SignIn">
                        Sign-up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Login">
                        Become a H&M Member
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
              </ul>
              
              
            
            
              <label>Light</label><input type="checkbox" onClick={handleToggleTheme} ref={inputRef} class="theme-checkbox" /><label>Dark</label>



            </div>
          </div>
        </nav>
          </div>
       
      <br></br>
      <br></br>
     <br></br>

   







     
    </>
  );
};

export default Navbar;


