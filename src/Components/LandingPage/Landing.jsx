import React from "react";
import Nav from "./Nav";
import '../LandingPage/Landing.css'
import Body from "./Body";

const Landing = () =>{
    return(
        <div className="land">
            <Nav />
            <Body />
        </div>
    )
}

export default Landing