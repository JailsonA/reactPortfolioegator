import './about.css';
import Me from '../../assets/me-about.jpg'
import {BiAward} from 'react-icons/bi';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {VscFolderLibrary} from 'react-icons/vsc';
function About() {
  return (
    <section id="about" >
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="about" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about_card'>
              <AiOutlineUsergroupAdd className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam, eveniet fugit eum modi amet nesciunt illo voluptatibus at labore ut? Alias quo odio sequi? Expedita illum exercitationem repellat odio.</p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;