import React from "react";
import Smoke from '../video/redSmoke3.webm';
import SmokeMp4 from '../video/redSmoke.mp4';
const Video= () => {
  return (
    
    <video className="backgroundVideo" loop autoPlay>
      <source src={Smoke} type="video/webm" />
      <source src={SmokeMp4} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
  );
};

export default Video;
