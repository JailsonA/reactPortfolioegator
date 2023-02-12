import './experience.css';
import {BsCheck2Circle} from 'react-icons/bs';
function Experience() {
  return (
    <section id='experience' className='experience_el' >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>                
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
                
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
                
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>            
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
                
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Learning</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon' />
              <div>
              <h4>Mysql</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Learning</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon' />
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>            
            <article className='experience_details'>
              <BsCheck2Circle className='experience_details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;