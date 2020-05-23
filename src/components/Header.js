import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <div className="menu-wrapper">
             <img className ="logo" src={logo} alt="logo"></img>
            <nav className="menu">
                <Link to ="/"><span>Home</span></Link>
                <Link to ="/projects"><span>Projects</span></Link>
                <Link to ="/about-me"><span>About me</span></Link>
                <Link to ="/skills"><span>Skills</span></Link>
            </nav>
           
        </div>
    )
}


export default Header;