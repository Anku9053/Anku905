import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMailOpen } from 'react-icons/hi';
const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div style={{fontSize:'16px'}}>© 2023</div>
        
        <div className='socials-icon'>
            <a href="mailto:ankesh9053@gmail.com" target='_blank' rel="noreferrer"><HiOutlineMailOpen size={'22px'}/></a>
            <a href="https://www.linkedin.com/in/ankesh-kumar-591595257/" target='_blank' rel="noreferrer"><SiLinkedin size={'18px'}/></a>
            <a href="https://github.com/Anku9053" target='_blank' rel="noreferrer"><SiGithub size={'20px'}/></a>
        </div>
    </div>
  );
};

export default Footer;
