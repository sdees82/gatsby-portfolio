import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hamburger from '../images/hamburger.png';
// import Link from 'gatsby-link';
// import './navbar.css'
// import Github from '../../images/github.png'
class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
           isHovered: false,
           active: false,
        }
    }

    clickHandler = () =>{
        this.state.active === false ? this.setState({...this.state.active, active: true}) : this.setState({...this.state.active, active: false});
       console.log(this.state.active);
    }
    handleHover = () =>{
        this.setState({...this.state.isHovered, isHovered: true});
    }

    render(){
        const linkClass = this.state.isHovered ? "navLink" : "";
        const sideBar = this.state.active === true ? "open" : "close";
        console.log(sideBar);
      return ( 
            
            <nav className="navbar">
            <section id="sidebar" className={sideBar}>
            <ul>    
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <h1>Work</h1>
                <hr/>
                <li><Link to="/work">Baron Website</Link></li>
                <li><Link to="/medical">Medical Booking App</Link></li>
                <li><Link to="/clarafai">Facial Recognition App</Link></li>
            </ul>
            </section>
                <section className="navbar-left">
                    <a onClick={this.clickHandler}><img className="hamburger" src={Hamburger}/></a>
                    <img className="brand" src="" alt="brand logo"/>
                    </section>
    
                    <section className="navbar-center">
                    <ul>
                    <li onMouseEnter={this.handleHover} className={linkClass}><Link to="/">HOME</Link></li>
                    <li onMouseEnter={this.handleHover} className={linkClass}><Link to="/about">ABOUT</Link></li>
                    <li onMouseEnter={this.handleHover} className={linkClass}><Link to="/work">WORK</Link></li>
       {/*} <li><a href="" mailto="seantedees1982@gmail.com">CONTACT</a></li>*/}
                    </ul>
                    </section>
    
                    <section className="navbar-right">
                        <ul>
                        <li onMouseEnter={this.handleHover} className={linkClass}><a target="_blank" href="https://twitter.com/TayDees">TWITTER</a></li>
                        <li onMouseEnter={this.handleHover} className={linkClass}><a target="_blank" href="https://github.com/sdees82">GITHUB</a></li>
                        <li onMouseEnter={this.handleHover} className={linkClass}><a target="_blank" href="https://codepen.io/taydees/">CODEPEN</a></li>
                        </ul>
                    </section>
                </nav>
        );
    }
}

export default Navbar;