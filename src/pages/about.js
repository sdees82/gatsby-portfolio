import React from 'react';
import Navbar from '../components/navbar';
import { CSSTransitionGroup } from 'react-transition-group';
import Link from 'gatsby-link';
import Arrow from '../images/blackArrow.png';
import seanMain from '../images/seanMain2.png';
import ClicketyClack from 'react-clicketyclack';

const lines = [
    'Hi',
    `I'm Sean`,
    `I'm Web Developer from Detroit, Michigan.`,
    `I love working on exciting new projects using bleeding edge web technology.`,
    'I enjoy developing user friendly, scalable and engaging websites'
  ];

const About = () =>{
    return (
        <div>
        <Navbar/>
            <section className="about">
                <div className="aboutLeft">
                <CSSTransitionGroup
        transitionName="workTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
         <h1>Hi</h1>
     <p>I'm Sean, a Web Developer from Detroit, Michigan. I love working on exciting new projects using bleeding edge web technology. I enjoy developing user friendly, scalable and engaging websites.</p>
     <br/>
     <h2>Skills</h2> 
     <ul>
         <li>HTML</li>
         <li>CSS</li>
         <li>JAVASCRIPT</li>
         <li>REACTJS</li>
         <li>ANGULAR</li>
         <li>NODEJS</li>
     </ul>           
    {/* <ClicketyClack className="clickety" lines={lines} erase repeat speed={60} eraseSpeed = {30}/> */}
    </CSSTransitionGroup>
                </div>

                <div className="aboutRight">
                <CSSTransitionGroup
                transitionName="aboutTransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={300}>
                    <img className="mainPicAbout" src={seanMain} alt="Sean"/>
                    </CSSTransitionGroup>
                </div>
            </section>
            <Link to="/" className="arrowBack" ><img src={Arrow} alt="arrow icon" /></Link>
            <Link to="/work" className="arrow" ><img src={Arrow} alt="arrow icon" /></Link>
            </div>
    );
}

export default About;