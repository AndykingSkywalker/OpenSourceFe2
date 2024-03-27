import { useLocation } from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../themes.js';
import { useState, useEffect } from "react";
import Logo from "../../Images/ajk-high-resolution-logo.png";

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor}`;

function Navbar() {

  const location = useLocation();

  const [theme, setTheme] = useState(() => 
  window.localStorage.getItem('theme') || 'light');
  
  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  };

  if(location.pathname === "/LoginPage"){
    return null;
  }
    return ( 
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div style={{marginRight: "50px", fontSize: "20px"}} className="container-fluid">
      <a className="navbar-brand" href="/Home"> <img src={Logo} width="180rem" height="120rem" alt="company logo" /></a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <br />
          <button style={{fontSize: "20px", fontWeight: "bold"}} className="btn btn-secondary" onClick={() => themeToggler()}>Change Theme</button>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/Home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CreateItems">
                Create Item
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/Wishlist">
                  Wishlist
                </a>
                <a className="dropdown-item" href="/">
                  Log Off
                </a>
              </div>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
        </StyledApp>
        </ThemeProvider>
     );
}

export default Navbar;