import React from "react";
import Navbar from "../components/navbar";
import Video from '../components/video';
import RoboFriendsIMG from "../images/robofriends.png";
import Arrow from "../images/blackArrow.png";
import ReactLogo from "../images/reactLogo.png";
import Link from "gatsby-link";
import { CSSTransitionGroup } from "react-transition-group";

const Robofriends = () => {
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
            <a
              target="_blank"
              href="https://sdees82.github.io/robofriends.github.io/"
            >
              <img src={RoboFriendsIMG} alt="Robofriends app" />
            </a>
            <p>
            <img className="frameWork" src={ReactLogo} alt="Made with React JS"/>
            </p>
          </div>
          <article className="description">
            <h1>RoboFriends Application</h1>
            <p>
              This is a simple app created with React that using the <a href="https://robohash.org/"><strong>RoboHash Api</strong></a>. 
              You can view the code <strong><a className="dim" target="_blank" href="https://sdees82.github.io/robofriends.github.io/">here</a></strong> or click the picture above.
            </p>
          </article>
        </CSSTransitionGroup>
      </section>
      <Link to="/clarafai" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
      <Link to="/contact" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
    </div>
  );
};

export default Robofriends;
