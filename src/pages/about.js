import React from 'react';
import Navbar from '../components/navbar';
import { CSSTransitionGroup } from 'react-transition-group';
const About = () =>{
    return (
        <div>
        <Navbar/>
            <section className="about">
                <div className="aboutLeft">
                <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
                    <h1>Hi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </CSSTransitionGroup>
                </div>

                <div className="aboutRight">

                </div>
            </section>
            </div>
    );
}

export default About;