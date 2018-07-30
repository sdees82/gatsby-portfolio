import React from "react";
import Navbar from "../components/navbar";
import Video from '../components/video';
import MedicalImg from "../images/medicalImg2.jpg";
import Arrow from "../images/blackArrow.png";
import ReactLogo from "../images/reactLogo.png";
import Link from "gatsby-link";
import { CSSTransitionGroup } from "react-transition-group";

const Medical = () => {
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
              href="https://github.com/sdees82/Appointment-App"
            >
              <img src={MedicalImg} alt="Medical appointment app" />
            </a>
            <p>
            <img className="frameWork" src={ReactLogo} alt="Made with React JS"/>
            </p>
          </div>
          <article className="description">
            <h1>Appointment Application</h1>
            <p>
              This is a proof of concept for a medical booking application. This
              was created using ReactJS. You can view the code <strong><a className="dim" target="_blank" href="https://github.com/sdees82/Appointment-App">here</a></strong> or click the picture above.
            </p>
          </article>
          <Link to="/clarafai" className="arrowDown">
        <img src={Arrow} alt="arrow icon" />
      </Link>
        </CSSTransitionGroup>
      </section>
      <Link to="/work" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
      <Link to="/contact" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
    </div>
  );
};

export default Medical;
