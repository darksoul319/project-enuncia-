import React from 'react'
import aboutimg from '../images/hero_images/hero3.jpg'
const About = () => {
  return (
    <>
     <section className='section_biodata section'>
      <div className='container grid grid grid_two_column '>
      <div className='bio_img'>
      <img src={aboutimg} alt='about us'/>
      </div>
      {/*  about right side data */}
      <div className='bio_data'>
      <h2 className='common_heading'> Why choose us?</h2>
      <p>Enuncia Global Media Solution registered as a private limited company with the government of India since September 2018.
          Head quarter is based in New Delhi and we also have some branches in Mumbai and Bengaluru city.
       As of now Enuncia Global has team of more than 400 freelancer writer's, transcriber's, language translator's etc. across the world.
       </p>
       <br/>
       <p>
        We are deligate to our work. We have energetic employees and we always care about our customer because we are here for you.
        We offer's quite impressive services so dont't forget to check it out. Find detials below what we exactly offer's to our customer's!
       </p>
       <div className='bio_data_stats'>
        <div className='bio_stats'>
          <h3> Language Translation </h3>
          <div className='bio_progress_bar bio_progressbar1'><span>99%</span></div>
        </div>
        <div className='bio_stats'>
          <h3> A/V Transcription </h3>
          <div className='bio_progress_bar bio_progressbar2'><span>99%</span></div>
        </div>
        <div className='bio_stats'>
          <h3> Subtitling/ Captions </h3>
          <div className='bio_progress_bar bio_progressbar3'><span>99%</span></div>
        </div>
        <div className='bio_stats'>
          <h3> Ghost Writing </h3>
          <div className='bio_progress_bar bio_progressbar4'><span>99%</span></div>
        </div>
        <div className='bio_stats'>
          <h3> Localization </h3>
          <div className='bio_progress_bar bio_progressbar5'><span>99%</span></div>
        </div>
        <div className='bio_stats'>
          <h3> Transcreation </h3>
          <div className='bio_progress_bar bio_progressbar6'><span>99%</span></div>
        </div>
        <div className='bio_stats'>
          <h3> Copywriting </h3>
          <div className='bio_progress_bar bio_progressbar7'><span>99%</span></div>
        </div>
       </div>
       <div className='bio_data_btn'>
        <a href='btn' className='btn'>Learn more</a>
       </div>
      </div>
      </div>
     </section>
    </>
  )
}

export default About;
