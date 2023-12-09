import React from 'react'
import img from '../images/translation.svg'
import img1 from '../images/localization.jpg'
import img3 from '../images/contentwriting.jpg'
// import img4 from '../images/translation.jpg'
import img4 from '../images/translation-services.png';
const Services = () => {
  return (
    <>
    <section className=' section section_services'>
      <div className='container'>
      <h2 className='common_heading'>Our Services</h2>
      <p>We provides all services so look at beow.</p>
      </div>
      {/* services cards */}
      <div className='container grid grid_three_column'>
      <div className='service_box'>
        <img src={img} alt='services_img'/>
        <h3>Language Translation</h3>
        <p> we provides language translation in almost every
         language including foreign with most efficiency and cost effective.</p>
      </div>
      <div className='service_box'>
        <img src={img} alt='services_img'/>
        <h3>A/V Transcription</h3>
        <p> we provides language translation in almost every
         language including foreign with most efficiency and cost effective.</p>
      </div>
      <div className='service_box'>
        <img src={img4} alt='services_img'/>
        <h3>Subtitling/ Captions</h3>
        <p> we provides language translation in almost every
         language including foreign with most efficiency and cost effective.</p>
      </div>
      <div className='service_box'>
        <img src={img3} alt='services_img'/>
        <h3>Content Writing</h3>
        <p> we provides language translation in almost every
         language including foreign with most efficiency and cost effective.</p>
      </div>
      <div className='service_box'>
        <img src={img1} alt='services_img'/>
        <h3>Localization</h3>
        <p> we provides language translation in almost every
         language including foreign with most efficiency and cost effective.</p>
      </div>
      <div className='service_box'>
        <img src={img} alt='services_img'/>
        <h3>Copywriting</h3>
        <p> we provides language translation in almost every
         language including foreign with most efficiency and cost effective.</p>
      </div>
      </div>
    </section>
    </>
  )
}

export default Services;
