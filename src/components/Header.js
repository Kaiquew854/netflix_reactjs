import React from "react";
import './Header.css';

export default ({black})=>{
    return (
        <header className={black ? 'black': ''}>
           <div className="header--logo">
                <a href="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt="Netflix"></img>
                </a>
           </div>

           <div className="header--user">
                <a href="/">
                    <img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt="Usuario"></img>
                </a>
           </div>
        </header>
    )
}