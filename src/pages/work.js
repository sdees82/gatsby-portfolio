import React from 'react';
import Navbar from '../components/navbar';
import baronMain from '../images/baronMain.jpg';
import Arrow from '../images/blackArrow.png';
import BackArrow from '../images/blackArrowBack.png';
import Link from "gatsby-link";
import { CSSTransitionGroup } from 'react-transition-group';

const Work = () =>{
    return (
     
        <div>
        <Navbar/>
        <section className="work">
           
        <CSSTransitionGroup
        className="baronPage"
        transitionName="workTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="project">
        <a target="_blank" href="https://baronrings.com"><img src={baronMain} alt="baron website" /></a> 
        <hr/>
        <p><i>Created with Wordpress</i></p>
    </div>
            <div className="description">
                <h1>BARON CHAMPIONSHIP RINGS</h1>
                <p>This website was created for Baron Championship Rings located in Windsor, ON, Canada. This website was creating with Wordpress, Bootstrap</p>
                </div>
            </CSSTransitionGroup>
        </section>
        <Link to="/about" className="arrowBack" ><img src={BackArrow} alt="arrow icon" /></Link>
        <Link to="/medical" className="arrow" ><img src={Arrow} alt="arrow icon" /></Link>
        </div>
        
    );
}

export default Work;