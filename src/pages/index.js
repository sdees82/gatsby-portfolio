import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'gatsby-link';


class IndexPage extends React.Component{
  constructor(){
    super();
  }


  render(){
    return(
<div className="wrapper">
    <Navbar/>
    <Hero/>
  </div>
    )
  }
}
  

export default IndexPage
