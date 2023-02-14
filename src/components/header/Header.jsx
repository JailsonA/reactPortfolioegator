import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Header() {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello</h5>
        <h1>Janilson Andrade</h1>
        <h5 className="text-light">React Frontend Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="perfil" />
        </div>
        <a href="#contact" className='scrol_down'>Scroll Down</a>
      </div>
      
    </header>
  );
}

export default Header;