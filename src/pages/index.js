import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Video from '../components/video';
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'gatsby-link';


const videoURL = '../video/smoke.mov';
class IndexPage extends React.Component{
  constructor(){
    super();
  }


  render(){
    return(
  <div >
    <Helmet title="Sean | Dees" 
    meta={[
      { name: 'description', content: 'Sean Dees portfolio' },
      { name: 'keywords', content: 'Sean Dees, Seante Dees, web developer' },
    ]}
    />
      <Navbar/>
      <Hero/>
      <Video/>
      <div className="overlay"/>
  </div>
    )
  }
}
  

export default IndexPage
