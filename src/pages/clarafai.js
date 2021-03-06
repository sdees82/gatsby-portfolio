import React from "react";
import Navbar from "../components/navbar";
import Video from '../components/video';
import ClarafaiImg from "../images/clarafai2.png";
import Arrow from "../images/blackArrow.png";
import ReactLogo from "../images/reactLogo.png";
import Link from "gatsby-link";
import { CSSTransitionGroup } from "react-transition-group";
import Helmet from 'react-helmet'

const Clarafai = () => {
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
              href="https://github.com/sdees82/facial-recognition"
            >
              <img src={ClarafaiImg} alt="face regconition app" />
            </a>
            <p>
            <img className="frameWork" src={ReactLogo} alt="Made with React JS"/>
            </p>
          </div>
          <article className="description">
            <h1>Face Recognition Application</h1>
            <p>
              This is a proof of concept for an image recognition website that's
              gear toward celebs. It was created with React and uses the{" "}
              <strong>Clarafai</strong> Api. You can view the code <strong><a className="dim" target="_blank" href="https://github.com/sdees82/facial-recognition">here</a></strong> or click the picture above.
            </p>
          </article>
          <Link to="/robofriends" className="arrowDown">
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

export default Clarafai;
