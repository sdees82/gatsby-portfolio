import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Arrow from "../images/blackArrow.png";
import seanMain from "../images/seanMain2.png";
import Link from "gatsby-link";
import Navbar from "../components/navbar";


const Contact = () => {
  return (
      <div>
          <Navbar/>
    <header className="hero">
      <CSSTransitionGroup
        transitionName="workTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <form className="form" method="POST" netlify action="/thanks">
  <h1>CONTACT ME</h1>
  <p type="Name:"><input placeholder="John Doe"></input></p>
  <p type="Email:"><input placeholder="johndoe@gmail.com"></input></p>
  <p type="Message:"><textarea></textarea></p>
  <button>Send Message</button>
</form>
      </CSSTransitionGroup>
      <Link to="/about" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
    </header>
    <Link to="/" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
      <Link to="/" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
    </div>
  );
};

export default Contact;
