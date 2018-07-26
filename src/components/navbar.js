import React from "react";
import Link from 'gatsby-link';
import Hamburger from "../images/hamburger.png";
import Twitter from "../images/twitter.png";
import Github from "../images/github.png";
import Codepen from "../images/codepen.png";

const style = {
  linkActive: {
    color: 'white'
  }
};

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
      active: false
    };
  }


  clickHandler = () => {
    this.state.active === false
      ? this.setState({ ...this.state.active, active: true })
      : this.setState({ ...this.state.active, active: false });
  };
  handleHover = () => {
    this.setState({ ...this.state.isHovered, isHovered: true });
  };

  render() {
    const linkClass = this.state.isHovered ? "navLink" : "";
    const sideBar = this.state.active === true ? "open" : "close";
    console.log(sideBar);
    return (
      <nav className="navbar">
        <section id="sidebar" className={sideBar}>
          <ul>
            <li>
              <Link  to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/work" >Baron Website</Link>
            </li>
            <li>
              <Link to="/medical" >Medical Booking App</Link>
            </li>
            <li>
              <Link to="/clarafai" >Facial Recognition App</Link>
            </li>
            <li>
            <Link to="/contact" >Contact</Link>
              </li>
          </ul>
        </section>
        <section className="navbar-left">
          <a onClick={this.clickHandler}>
            <img className="hamburger" src={Hamburger} />
          </a>
          <p className="dim" >SD</p>
        </section>

        <section className="navbar-center">
          <ul>
            <li className="navLink">
              <Link to="/"  >HOME</Link>
            </li>
            <li className="navLink">
              <Link to="/about"  >ABOUT</Link>
            </li>
            <li className="navLink">
              <Link to="/work"  >WORK</Link>
            </li>
            <li className="navLink">
            <Link to="/contact" >CONTACT</Link>
            </li>
          </ul>
        </section>

        <section className="navbar-right">
          <ul>
            <li className="navLink">
              <a target="_blank" href="https://twitter.com/TayDees">
                <img className="fontAwesome" src={Twitter} alt="twitter"/>
              </a>
            </li>
            <li className="navLink">
              <a target="_blank" href="https://github.com/sdees82">
              <img className="fontAwesome" src={Github} alt="twitter"/>
              </a>
            </li>
            <li className="navLink">
              <a target="_blank" href="https://codepen.io/taydees/">
              <img className="fontAwesome" src={Codepen} alt="twitter"/>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default Navbar;
