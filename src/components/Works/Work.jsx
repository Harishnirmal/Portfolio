import React from 'react';
import './Work.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';



const Work = () => {
    return (
        <section id="works">
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className="worksdesc">I take pride in paying attention to the smallest details and making
                sure that my work is pixel perfect. I am exicited to bring my skills and experience to help business achieve their goals and create a strong online presence".
            </span>
            <div className="worksImgs">
                <a href="https://github.com/jelaross/SVS"><img src={Portfolio1} alt="" className="worksImg" /><h3><b>SVS</b><br /><h6>.net framework,C#</h6></h3></a>
                <a href="https://harish-food.netlify.app/"><img src={Portfolio2} alt="" className="worksImg" /><h3><b>Food Delivery Website</b><br /><h6>Reactjs</h6></h3></a>
                <a href="https://www.behance.net/gallery/204276583/Gym-website"><img src={Portfolio3} alt="" className="worksImg" /><h3><b>Gym Website Design</b><br /><h6>Figma, Photoshop</h6></h3></a>
                <a href="https://www.behance.net/gallery/209841395/Wolfs-File-Manager"><img src={Portfolio4} alt="" className="worksImg" /><h3><b>Mobile App Design</b> <br /><h6>Figma</h6></h3></a>
                
                
            </div>
            <button className="worksBtn">See More</button>
        </section>
    )
}

export default Work;