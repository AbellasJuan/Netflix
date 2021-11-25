import React from 'react';
import '../css/Header.css';

export default function Header({black}){
    return(
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                </a>  
            </div>  
            
            <div className="header--user">
                    <a href="/">
                        <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Usuario" />
                    </a>
            </div>
            
        </header>
    );
}