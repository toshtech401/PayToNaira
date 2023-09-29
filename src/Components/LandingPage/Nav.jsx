import React from "react";
import '../LandingPage/Nav.css'

const Nav = () =>{
    return(
        <div className="top">
            <h2>PayToNaira</h2>

            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Support&FAQ</li>
            </ul>
            <div className="btn">
                <button className="btn1">Sign In</button>
                <button className="btn2">Start Trading</button>
            </div>
        </div>
    )
}

export default Nav