import React from 'react'
import "../App.css"
import { Link, useNavigate } from "react-router-dom";


export default function LandingPage() {
  const router = useNavigate();
  return (
    <div className='LandingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>Apna Video Call</h2>
        </div>
        <div className="navlist">
          <p onClick={()=> {
            router("/2a3cdev")
          }}>Join as a guest</p>
          <p>Register</p>
          <div onClick={()=> {
            router("/2a3cdev")
          }} role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#FF9839"}}>Connect</span> with ur loved ones</h1>
          <p>Cover a distance by Apna Video call</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src='/mobile.png' alt=""/>
        </div>
      </div>
    </div>
  )
}


