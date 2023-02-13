import './contact.css';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();    
    emailjs.sendForm('service_0pzf4r5', 'template_pu8xdvi', form.current, 'wS1aXeh-WyBXn0ltK')
    e.target.reset()
  };

  return (
    <section id='contact' >
      <h5>Contact</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMarkEmailRead className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>maurocv18@gmail.com</h5>
            <a href="mailto:maurocv18@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Jandrade</h5>
            <a href="https://m.me/Jandoliv">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+351 000 000 000</h5>
            <a href="https://api.whatsapp.com/send?phone00351934079623">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Name' required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <input type="text" name='subject' placeholder='Subject' required />
            <textarea name="message" rows="7" placeholder='Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;