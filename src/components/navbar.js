import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../images/hamburger.png";

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
              <NavLink  to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" >About</NavLink>
            </li>
            <li>
              <NavLink to="/work" >Baron Website</NavLink>
            </li>
            <li>
              <NavLink to="/medical" >Medical Booking App</NavLink>
            </li>
            <li>
              <NavLink to="/clarafai" >Facial Recognition App</NavLink>
            </li>
            <li>
              <a href="mailto:seantedees1982@gmail.com">Contact</a>
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
              <NavLink to="/"  >HOME</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/about"  >ABOUT</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/work"  >WORK</NavLink>
            </li>
            <li className="navLink">
              <a href="mailto:seantedees1982@gmail.com">CONTACT</a>
            </li>
          </ul>
        </section>

        <section className="navbar-right">
          <ul>
            <li className="navLink">
              <a target="_blank" href="https://twitter.com/TayDees">
                TWITTER
              </a>
            </li>
            <li className="navLink">
              <a target="_blank" href="https://github.com/sdees82">
                GITHUB
              </a>
            </li>
            <li className="navLink">
              <a target="_blank" href="https://codepen.io/taydees/">
                CODEPEN
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default Navbar;
