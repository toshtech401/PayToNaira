import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const desktopMenu = ["Features", "Pricing", "Resources"];

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="first-wrap">
            <div className="header-logo">
              <img src="images/logo.svg" alt="logo" />
            </div>
            <div className="desktop-menu">
              {desktopMenu.map((dmenu) => (
                <li key={dmenu}>{dmenu}</li>
              ))}
            </div>
          </div>
          <div className="icon-toggle" onClick={handleClick}>
            {toggle ? (
              <div className="icon-hamburger">
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
              </div>
            ) : (
              <div className="icon-close">
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
              </div>
            )}
          </div>
          <div className="desktop-login">
            <p>Login</p>
            <button>Sign Up</button>
          </div>
        </div>
        {toggle ? null : <Nav />}
      </div>
    </header>
  );
};

export default Header;
