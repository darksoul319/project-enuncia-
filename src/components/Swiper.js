import React from 'react'
import img from '../images/hero_images/hero2.jpg';


const Swiper = () => {
  
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper_pagination",
          clickable: true,
        },
      });
    return (  
    
    <>
     <div className='swiper mySwiper'>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
        <div className='swiper_slide'><img src={img} alt='swperi_image'/></div>
     </div> 
    </>
  )
}

export default Swiper;
