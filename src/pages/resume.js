import React from "react";
import Navbar from "../components/navbar";
import Video from '../components/video';
import Arrow from "../images/blackArrow.png";
import Link from "gatsby-link";
import myResume from "../images/Dees-Resume'.pdf";
import { CSSTransitionGroup } from "react-transition-group";
import Helmet from 'react-helmet'

const Resume = () => {
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
      <section className="work resume">
        <CSSTransitionGroup
          className="baronPage"
          transitionName="workTransition"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="project">
           <div className="resumeTop">
           <p className="resumeDownload">Click <a className="dim" href={myResume} download="Dees-Resume">here</a> to download resume</p>
           <h1>SEAN DEES</h1>
           <p><span>(519) 915-9639</span><span><a href="mailto:seantedees1982@gmail.com">seantedees1982@gmail.com</a></span></p>
           <p><span>Website: seandees.tech</span><span></span>Github: <a href="https://github.com/sdees82">https://github.com/sdees82</a><span>Codepen: <a href="https://codepen.io/taydees/">https://codepen.io/taydees/</a> </span></p>
           <p>Skills overview: HTML, CSS, JavaScript, ReactJS, AngularJS, NodeJs, ExpressJS, Photoshop, Illustrator</p>
           </div>
             <hr/>
             
           <div className="jobDescription">
           <h1>PROFESSIONAL EXPERIENCE</h1>
            <h3>BARON CHAMPIONSHIP RINGS, WINDSOR, ON, CA</h3>
            <h4>Web Developer, March 2017 - Present</h4>
            <ul>
                <li>Builds customized websites using HTML, CSS, pure JavaScript and ReactJS to showcase the company’s products for marketing to professional sports organizations</li>
                <li> Maintains the company’s Shopify stores and creates new stores for professional sports organizations. </li>
                <li> Handles all Server-side responsibilities including Server migrations, domain name registration, DNS configuration,  subdomain creation, and SQL database management. </li>
            </ul>
            <h4>Freelance Web Developer, July 2015 - March 2017</h4>
            <ul>
                <li> Consulted with clients to identify goals for websites and web applications </li>
                <li>Provided user interface design using wire-framing us Sketch, Adobe Photoshop or Illustrator</li>
                <li> Created responsive websites and web applications using HTML5, CSS3, JavaScript, AngularJS, NodeJS and ExpressJS </li>
                <li>Tested content to ensure cross-browser compatibility </li>
                <li> Maintained websites by updating content as instructe</li>
            </ul>
           </div>

           
           </div>
        </CSSTransitionGroup>
      </section>
      <Link to="/contact" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
      </Link>
     
    </div>
  );
};

export default Resume;
