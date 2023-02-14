import './footer.css';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
function Footer() {
  return (
    <footer >
      <a href="#" className='footer_logo'>BcoDSystem</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://linkedin.com"><FaLinkedinIn /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; BcoDSystem. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;