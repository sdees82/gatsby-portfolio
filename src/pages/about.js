import React from "react";
import Navbar from "../components/navbar";
import Video from '../components/video';
import { CSSTransitionGroup } from "react-transition-group";
import Helmet from 'react-helmet'
import Link from "gatsby-link";
import Arrow from "../images/blackArrow.png";

const About = () => {
  return (
    <div>
        <Helmet title="Sean | Dees" 
    meta={[
      { name: 'description', content: 'Sean Dees portfolio' },
      { name: 'keywords', content: 'Sean Dees, Seante Dees, web developer' },
    ]}
    />
      <Navbar />
      <Video/>
      <div className="overlay"/>
      <section className="about">
        <div className="aboutLeft">
          <CSSTransitionGroup
            transitionName="workTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
          >
            <h1>Hi</h1>
            <p>
              I'm Sean, a Web Developer from Detroit, Michigan. I love working
              on exciting new projects using bleeding edge web technology. I
              enjoy developing user friendly, scalable and engaging websites.
            </p>
            <br />
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACTJS</li>
              <li>ANGULARJS</li>
              <li>NODEJS</li>
              <li>GITHUB</li>
              <li>PHOTOSHOP</li>
              <li>ILLUSTRATOR</li>
              <li>SKETCH</li>
            </ul>
          </CSSTransitionGroup>
        </div>
        <div className="aboutRight">
        </div>
      </section>
      <Link to="/" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
      <Link to="/work" className="arrow">
        <img src={Arrow} alt="arrow icon" />
      </Link>
    </div>
  );
};

export default About;
