import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import img1 from '../images/shoe1.png';
import img2 from '../images/shoe2.png';
import img3 from '../images/shoe3.png';
import img4 from '../images/shoe4.png';
import img5 from '../images/shoe5.png';


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
                <img src={img5} />
            </div>
        </Carousel>
        </>
    )
}

export default Slider;