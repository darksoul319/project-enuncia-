import React from 'react'
import hero1 from '../images/hero_images/hero4.jpg';
const Hero = () => {
  return (
    <>
     <main>
         <section className='section_hero section'>
         <div className='container grid grid grid_two_column'>
          <div className='section_hero_data'>
          <p className='hero_top_data'>welcome to</p>
          <h1 className='hero_heading'>Enuncia Global Media Solution</h1>
          <p className='hero_para'>
            Enuncia Global Media Solutions is an Indian post production content management company.
        </p>
        <div>
        <a href='#' className='btn hireus_btn'>Hire us</a>
        </div>
          </div>
           {/* hero section right side */}
          <div className='section_hero_img'>
              <img src={hero1} alt='hero_image' className='hero_image'/>
          </div>  
         </div>
         </section>
     </main> 
    </>
  )
}

export default Hero;
