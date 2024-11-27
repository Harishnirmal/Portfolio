import React from 'react';
import './Intro.css';
import bg from '../../assets/mask.png';
import btnImg from '../../assets/resume.png';

import resume from '../../resume/1.pdf';

const Intro = () => {
  return (
    <section id='Intro'>
        <div className="introContent">
            <span className='hello'>Hello</span>
            <span className="introText">I'm <span className="introName">Harish</span><br />Frontend Developer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <a href={resume} download="My_resume.pdf"><button className='btn'><img src={btnImg} alt="" className='btnImg'/><b> Dowload CV</b></button></a>
        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro;