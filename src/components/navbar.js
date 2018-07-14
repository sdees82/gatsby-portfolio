import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Link from 'gatsby-link';
// import './navbar.css'
// import Github from '../../images/github.png'
const Navbar = () =>{
    return ( 
        <nav className="navbar">
            <section className="navbar-left">
                <img src="" alt="brand logo"/>
                </section>

                <section className="navbar-center">
                <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/work">WORK</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                </section>

                <section className="navbar-right">
                    <ul>
                    <li><Link to="https://twitter.com/TayDees">TWITTER</Link></li>
                    <li><Link to="https://github.com/sdees82">GITHUB</Link></li>
                    <li><Link to="/">CODEPEN</Link></li>
                    </ul>
                </section>
            </nav>
    );

}

export default Navbar;