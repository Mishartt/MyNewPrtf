import React from "react";
// import logo from './assets/img/logo.png'


const Header = ({logo}) => {
    return(
    <header>
        <div className="container">
           
            <div className="logo">
                <img src={logo}/>
            </div>
          
            
            <nav className="menu" >
                <ul className="header__list">
                    <li >
                        <a href="#home" className="header__link">Home</a>
                    </li>
                    <li>
                        <a href="#About" className="header__link">About</a>
                    </li>
                    <li>
                        <a href="#Potfolio" className="header__link">Potfolio</a>
                    </li>
                    <li>
                        <a href="#Contact" className="header__link">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    
    )
}



export default Header