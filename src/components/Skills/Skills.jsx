import React from 'react';
import './Skills.css';
import uidesign from '../../assets/ui-design.png';
import webdisign from '../../assets/website-design.png';
import appdesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skilldescription">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
                I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Javascript, as well as design software such as Figma and Adobe Photoshop.
            </span>
            <div className='skillBars'>
            <div className="skillBar">
                <img src={uidesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>User Interface and User Experience</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webdisign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Website Design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={appdesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Applications design</p>
                </div>
            </div>
            </div>
           
        </section>
    )
}

export default Skills;