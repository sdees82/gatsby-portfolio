import React from 'react';
import Navbar from '../components/navbar';
import MedicalImg from '../images/medicalImg.jpg';
import Arrow from '../images/blackArrow.png';
import BackArrow from '../images/blackArrowBack.png';
import Link from "gatsby-link";
import { CSSTransitionGroup } from 'react-transition-group';

const Medical = () =>{
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
        <a target="_blank" href="https://github.com/sdees82/Appointment-App"><img src={MedicalImg} alt="Medical appointment app" /></a> 
        <hr/>
        <p><i>Created with React</i></p>
    </div>
            <div className="description">
                <h1>Appointment Application</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </CSSTransitionGroup>
        </section>
        <Link to="/work" className="arrowBack" ><img src={BackArrow} alt="arrow icon" /></Link>
        <Link to="/clarafai" className="arrow" ><img src={Arrow} alt="arrow icon" /></Link>
        </div>
        
    );
}

export default Medical;