import React, {useState} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.css';
import img1 from '../images/shoe1.png';
import img2 from '../images/shoe.png';
import img2 from '../images/shoe3.png';
import img3 from '../images/shoe4.png';
import img5 from '../images/shoe5.png';


import '../src/style/slide.css';

const Slide = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length < 0) {
        return null
    }
  return (
    <div>
      <section className='slider'>
        <div className='control-btn'>
            <button className='prev' onClick={prevSlide}>
                <i className='fas fa-caret-left'></i>
            </button>
            <button className='next'>
                <i className='fas fa-caret-right' onClick={nextSlide}></i>
            </button>
        </div>
      
    {Data.map((slide,index) => {
    return(
        
        <div className={index === current ? "slide active" : "slide" } key={index} >
            {index === current && <img src = {slide.images} alt =" " /> } 
            </div>
    )
     })}
</section>


    </div>
  )
}

export default Slide