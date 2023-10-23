import React from "react"
import '../App.css';

const interests = "I'm interested in Web Development, React, and Front-end Design.";

export default function Interests(){
    return (
        <div className='interests'>
        <h3>Interests</h3>
        <p>{interests}</p>
      </div>
    )
}
