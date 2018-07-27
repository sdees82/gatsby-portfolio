import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Arrow from "../images/blackArrow.png";
import Link from "gatsby-link";
import Navbar from "../components/navbar";
import Video from '../components/video';


const Contact = () => {
  return (
      <div>
          <Navbar/>
          <Video/>
          <div className="overlay"/>
    <header className="work">
      <CSSTransitionGroup
        transitionName="workTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <form className="form" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks">
        <input type="hidden" name="form-name" value="contact" />
  <h1>CONTACT ME</h1>
  <p type="Name:"><input placeholder="John Doe"></input></p>
  <p type="Email:"><input placeholder="johndoe@gmail.com"></input></p>
  <p type="Message:"><textarea></textarea></p>
  <button>Send Message</button>
</form>
      </CSSTransitionGroup>
    </header>
    <Link to="/work" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
      <Link to="/" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
    </div>
  );
};

export default Contact;
