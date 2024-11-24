import React, { useRef } from 'react';
import './Contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import micro from '../../assets/microsoft.png';
import fb from '../../assets/facebook.png';
import facebook from '../../assets/facebook-icon.png'
import twit from '../../assets/twitter.png'
import Yt from '../../assets/youtube.png'
import Insta from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.your_name.value.trim();
    const email = form.current.your_email.value.trim();
    const message = form.current.message.value.trim();

    
    if (!name ) {
      alert( 'Please fill the name before submitting.');
      return;}
    if(!email){
        alert( 'Please fill the email before submitting.');
        return;
    }
    if(!message){
        alert( 'Please fill the message before submitting.');
        return;
    }
    

    
        emailjs
          .sendForm('service_myy0942', 'template_svnn66l', form.current, {
            publicKey: '4mRTmzRv-0F_gJkWb',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Failed to send email. Please try again.');
            },
          );
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">Clients</h1>
            <p className="clientdesc">
                I have had the opportunity to work with a diverse group of companies. Some of the notable
                companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={walmart} alt="Clients" className="clientImg" />
                <img src={adobe} alt="Clients" className="clientImg" />
                <img src={micro} alt="Clients" className="clientImg" />
                <img src={fb} alt="Clients" className="clientImg" />
            </div>
        </div><div id="contacts">
        <div className="contact">
            <h1 className="contactPageTitle">Contact ME</h1>
            <span className="contactdesc">
                Please fill out the form below the discuss any work opportunities
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea name="message" className='msg' rows="5" placeholder='Your message' ></textarea>
                <button type='submit' className="submit">Submit</button>
                <div className="links">
                    <img src={facebook} alt="" className="link" />
                    <img src={twit} alt="" className="link" />
                    <img src={Yt} alt="" className="link" />
                    <img src={Insta} alt="" className="link" />
                </div>
            </form>
        </div>
        </div>
        
    </section>
  )
}

export default Contact;