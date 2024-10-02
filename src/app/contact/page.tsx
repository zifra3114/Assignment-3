import Header from "../components/header"
import { FaEnvelope,  FaLinkedin, FaGithub,  } from 'react-icons/fa';
export default function Contact(){
    return(
        <div>
            <Header/>
          <div className="contact-info">
           <div className="contact">
      <h2 >Contact Me</h2>
      </div>
      <div >
        <div className="Email">
          <FaEnvelope size={30}  />
          <a href="zifrafirdous372@gmail.com" >zifrafirdous372@gmail.com</a>
        </div>
        <div className="linkedin">
          <FaLinkedin size={30}  />
          <a href="https://www.linkedin.com/in/zifrafirdous14">LinkedIn</a>
        </div>
        <div className="github">
          <FaGithub size={30}  />
          <a href="https://github.com/zifra3114" >GitHub</a>
        </div>
      </div>
      </div>
        </div>
    )
}