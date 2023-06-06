import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../imgs/img3.jpg";
import img2 from "../imgs/img4.jpg";




function Services() {
  return (
    <div className='services'>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows = {false}
    showThumbs={false}
    
    interval={1000}>
    <div>
        <img src={img1} alt='item1'/>
        <p className='legend'>Full Stack</p>
    </div>
    <div>
        <img src={img2} alt='item2'/>
        <p className='legend'>Peer-to-Peer Support</p>
    </div>

    </Carousel>

    </div>
  )
}

export default Services;