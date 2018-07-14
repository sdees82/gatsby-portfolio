import React from 'react';
import Navbar from '../components/navbar';
import { CSSTransitionGroup } from 'react-transition-group';

const Work = () =>{
    return (
     
        <div>
        <Navbar/>
        <section className="work">
            <div className="project">
            {/* <img src={Baron} alt="baron website" /> */}
            </div>
            <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
            <div className="description">
            <h1>BARON CHAMPIONSHIP RINGS</h1>
            </div>
            </CSSTransitionGroup>
        </section>
        </div>
        
    );
}

export default Work;