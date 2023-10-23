import React from "react"
import '../App.css';

const twitter = "https://www.twitter.com/john.doe/";
const instagram = "https://www.instagram.com/john.doe/";
const github = "https://www.github.com/john.doe/"

export default function Socials(){
    return (
        <div className='socials'>
            <div className='footer-div'>
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter me-3"></i>
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram me-3"></i>
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-3"></i>
              </a>
            </div>
          </div>
    )
}