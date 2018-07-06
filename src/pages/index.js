import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Work from '../components/work';
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <Navbar/>
    <Hero/>
    <Work/>
  </div>
)

export default IndexPage
