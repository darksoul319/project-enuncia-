import React from 'react'
import img from '../images/hero_images/hero2.jpg'
const Portfolio = () => {
  return (
    <>
      <section className='section section_portfolio' id='portfolio_section'>
          <div className='container'>
            <h2 className='common_heading'>Our Works</h2>
            <p>We are working since 2018. Therefore we have made lot's of customer in this journey and we are
                happy to share you our works! please look at below.  </p>
          </div>
          <div className='p_btns'>
          <div className='btn p_btn' data_btn_num='1'>website</div>
            <div className='btn p_btn' data_btn_num='2'>youtube</div>
            <div className='btn p_btn' data_btn_num='3'>design</div>
          </div>
          <div className='container grid grid_three_column portfolio_images'>
            <div className='image_overlay p_btn--1'>
            <img src={img} alt='portfolio images'/>
            <div className='overlay'>
              <a href='overlay' target="_blank" className='common_heading'>Project 1</a>  
            </div>
            </div>
            <div className='image_overlay p_btn--2'>
            <img src={img} alt='portfolio images'/>
            <div className='overlay'>
              <a href='overlay' target="_blank" className='common_heading'>Project 2</a>  
            </div>
            </div>
            <div className='image_overlay p_btn--3'>
            <img src={img} alt='portfolio images'/>
            <div className='overlay'>
              <a href='overlay' target="_blank" className='common_heading'>Project 3</a>  
            </div>
            </div>
            <div className='image_overlay p_btn--4'>
            <img src={img} alt='portfolio images'/>
            <div className='overlay'>
              <a href='overlay' target="_blank" className='common_heading'>Project 4</a>  
            </div>
            </div>
            <div className='image_overlay p_btn--5'>
            <img src={img} alt='portfolio images'/>
            <div className='overlay'>
              <a href='overlay' target="_blank" className='common_heading'>Project 5</a>  
            </div>
            </div>
            <div className='image_overlay p_btn--6'>
            <img src={img} alt='portfolio images'/>
            <div className='overlay'>
              <a href='overlay' target="_blank" className='common_heading'>Project 6</a>  
            </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Portfolio;
