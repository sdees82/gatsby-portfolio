import React from "react";
import Navbar from "../components/navbar";
import Video from '../components/video';
import baronMain from "../images/baronMain2.jpg";
import Arrow from "../images/blackArrow.png";
import WordpressLogo from "../images/wordpressLogo.png";
import Link from "gatsby-link";
import { CSSTransitionGroup } from "react-transition-group";

const Work = () => {
  return (
    <div>
      <Navbar />
      <Video/>
      <div className="overlay"/>
      <section className="work">
        <CSSTransitionGroup
          className="baronPage"
          transitionName="workTransition"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="project">
            <a target="_blank" href="https://baronrings.com">
              <img src={baronMain} alt="baron website" />
            </a>
            <p>
            <img className="frameWork" src={WordpressLogo} alt="Made with React JS"/>
            </p>
          </div>
          <article className="description">
            <h1>BARON RINGS</h1>
            <p>
              This website was created for Baron Championship Rings located in
              Windsor, ON, Canada. This website was created with Wordpress. You can view the live site <strong><a className="dim" target="_blank" href="https://baronrings.com">here</a></strong> or click the picture above.
            </p>
          </article>
          <Link to="/medical" className="arrowDown">
        <img src={Arrow} alt="arrow icon" />
      </Link>
        </CSSTransitionGroup>
      </section>
      <Link to="/about" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
      <Link to="/contact" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
     
    </div>
  );
};

export default Work;
