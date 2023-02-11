 import React from 'react'
 import { BsLinkedin } from 'react-icons/bs';
 import { FaGithub, FaInstagram } from 'react-icons/fa';
 function HeaderSocials() {
   return (
     <div className='header_socials'>
       <a href="www.linkedin.com" target="_blanck"><BsLinkedin /></a>
       <a href="www.github.com" target="_blanck"> <FaGithub/></a>
       <a href="www.instagram.com" target="_blanck"><FaInstagram/></a>
     </div>
   )
 }
 
 export default HeaderSocials
 