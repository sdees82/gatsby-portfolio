import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'gatsby-link';
import Smoke from '../video/smoke.mp4';

const videoURL = '../video/smoke.mov';
class IndexPage extends React.Component{
  constructor(){
    super();
  }


  render(){
    return(
  <div className="wrapper">
      <Navbar/>
      <video className="backgroundVideo" loop autoPlay>
      <source src={Smoke} type="video/mp4" />
      <source src="../video/smoke.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      <Hero/>
    </video>
  </div>
    )
  }
}
  

export default IndexPage
