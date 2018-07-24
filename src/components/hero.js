import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Arrow from '../images/blackArrow.png';
import seanMain from '../images/seanMain2.png';
import Link from "gatsby-link";
import Tilt from 'react-tilt';


const TiltOptions = {
    max: 25,
    perspective:    70000,
    transition:     true
};
const Hero = () =>{
    return (
        
        <header className="hero">
        <CSSTransitionGroup
  transitionName="homeTransition"
  transitionAppear={true}
  transitionAppearTimeout={500}
  transitionEnter={false}
  transitionLeave={false}>
            {/* <Tilt
            options={TiltOptions}
            > */}
                <div>
                    <h1>SEAN DEES</h1>
                    <h2>Web Developer</h2>
                </div>
            {/* </Tilt> */}
            </CSSTransitionGroup>
            <Link to="/about" className="arrow" ><img src={Arrow} alt="arrow icon" /></Link>
        </header>
    );
}

export default Hero;