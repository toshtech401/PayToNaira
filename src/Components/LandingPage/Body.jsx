import React from "react";
import image from '../Images/image 2.png'
import '../LandingPage/Landing.css'

const Body = () =>{
    return(
        <div className="body">
            <div className="text">
                <h1>Your Gateway to Financial Flexibility</h1>
                <p>PaytoNaira is the most secure way to buy and sell paypal funds, payoneer and gift cards in Nigeria at better exchange rates.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Body