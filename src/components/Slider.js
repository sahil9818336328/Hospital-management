import React, { useEffect, useState } from 'react'
import '../assets/css/slider.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import img_1 from '../assets/images/slider_1.jpg'
import img_2 from '../assets/images/slider_2.jpg'
import img_3 from '../assets/images/slider_3.jpg'
import img_4 from '../assets/images/slider_4.jpg'
import img_5 from '../assets/images/slider_5.jpg'
import img_6 from '../assets/images/slider_6.jpg'

const images = [
  { id: 1, image: img_1 },
  { id: 2, image: img_2 },
  { id: 3, image: img_3 },
  { id: 4, image: img_4 },
  { id: 5, image: img_5 },
  { id: 6, image: img_6 },
]

const Slider = () => {
  const [slides, setSlides] = useState(images)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = slides.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, slides])

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [index])
  return (
    <section className='slider'>
      <div className='slider__center'>
        {slides.map((slide, slideIndex) => {
          const { image } = slide

          let position = 'nextSlide'
          if (slideIndex === index) {
            position = 'activeSlide'
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={slide.id}>
              <img src={image} alt='amazon_slide' className='slider__image ' />
            </article>
          )
        })}
        <button className='slider__prev' onClick={() => setIndex(index - 1)}>
          <ArrowBackIosIcon />
          <ArrowBackIosIcon className='slider__btnWhite ' />
        </button>
        <button className='slider__next' onClick={() => setIndex(index + 1)}>
          <ArrowForwardIosIcon />
          <ArrowForwardIosIcon className='slider__btnWhite ' />
        </button>
      </div>
    </section>
  )
}

export default Slider
