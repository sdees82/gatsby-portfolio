import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Navbar from "../components/navbar";
import Video from '../components/video';

const Thanks = () => {
  return (
      <div>
          <Navbar/>
          <Video/>
          <div className="overlay"/>
    <header className="hero">
      <CSSTransitionGroup
        transitionName="workTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div>
          <h1>THANK YOU</h1>
            <h2>I will contact you as soon as possible</h2>
        </div>
      </CSSTransitionGroup>
    </header>
    </div>
  );
};

export default Thanks;
