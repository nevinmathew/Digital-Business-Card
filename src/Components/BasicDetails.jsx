import React from "react"
import '../App.css';

const name = "John Doe";
const position = "Web Developer";
const website = "https://www.johndoe.com/";

export default function BasicDetails(){
    return (
        <div className='basic-details'>
            <h2>{name}</h2>
            <p>{position}</p>
            <a href='{website}'>{website}</a>
          </div>
    )
}