import React from "react"
import '../App.css';

const about = "Experienced web developer with a passion for creating responsive and user-friendly websites. " +
"Open to new opportunities and collaborations.";

export default function About(){
    return (
        <div className='about'>
            <h3>About</h3>
            <p>{about}</p>
          </div>
    )
}