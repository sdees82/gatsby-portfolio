import React from 'react';
import Navbar from '../components/navbar';
import MedicalImg from '../images/medicalImg2.jpg';
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
        <p><i>Created with React</i></p>
    </div>
            <article className="description">
                <h1>Appointment Application</h1>
                <p>This is a proof of concept for a medical booking application. This was created using ReactJS </p>
            </article>
            </CSSTransitionGroup>
        </section>
        <Link to="/work" className="arrowBack" ><img src={Arrow} alt="arrow icon" /></Link>
        <Link to="/clarafai" className="arrow" ><img src={Arrow} alt="arrow icon" /></Link>
        </div>
        
    );
}

export default Medical;