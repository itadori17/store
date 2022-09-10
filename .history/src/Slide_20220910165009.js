import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import img1 from './images/shoe1.PNG';
import img2 from './images/shoe2.PNG';
import img3 from './images/shoe3.PNG';
import img4 from './images/shoe4.PNG';
import img5 from './images/shoe5.png';


function Slider() {
    return(
        <>
        <Carousel>
            <div>
                <img src={img1} height='300px' width='200px'/>
            </div>
            <div>
                <img src={img2} height='300px' width='200px' />
            </div>
            <div>
                <img src={img3} height='300px' width='200px' />
            </div>
            <div>
                <img src={img4}  height='300px' width='200px' />
            </div>
            <div>
                <img src={img5} height='300px' width='200px'/>
            </div>
        </Carousel>
        </>
    )
}

export default Slider;