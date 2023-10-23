import React from "react";
import avatarLd from "../../images/avatar-ld.png";
import avatarHd from "../../images/avatar-hd.png";
import '../App.css';

export default function Image(){
    return (
        <header className='image'>
          <a href={avatarHd} className='profile-image'>
            <img src={avatarLd} />
          </a>
        </header>
    )
}