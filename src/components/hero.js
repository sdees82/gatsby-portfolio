import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const Hero = () =>{
    return (
        
        <header className="hero">
        <CSSTransitionGroup
  transitionName="homeTransition"
  transitionAppear={true}
  transitionAppearTimeout={500}
  transitionEnter={false}
  transitionLeave={false}>
            <div>
                <h1>SEAN DEES</h1>
                <h2>WEB DEVELOPER</h2>
            </div>
            </CSSTransitionGroup>
        </header>
    );
}

export default Hero;