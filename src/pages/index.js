import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'gatsby-link';


const IndexPage = () => (
  
  <div className="wrapper">
    <Navbar/>
    <Hero/>
  </div>
  
)

export default IndexPage
