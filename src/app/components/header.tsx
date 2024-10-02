import Image  from "next/image"
import Logo from "../picture/images.jpg"
import Link from "next/link"

 export default function Header(){
    return(
        <div className="portofolio">
        <div className="header">
            <div className="logo" >
             <Image src={Logo} alt="Logo" width={50}  height={50}/> 
            </div>
           <ul className="header-button">
           <Link href={"/"}> <li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
           
            <Link href={"/contact"}><li>Contact Me</li></Link>
           </ul>
           <hr />

             
          </div>
           {/* <div className="info">
        <div className="photo">
           <Image src={Picture} alt="Photo" />
           </div> 
           <div className="name">
            <h1><b><i>ZIFRA FIRDOUS</i></b></h1>
           <p>I&apos;m a Frontend Developer</p>
           </div>
         <div className="resume">
           <button type="button">Resume</button>
        </div>
        <div className="skills">
        <button type="button">Skills</button>
        </div> 
       </div>          */}
        </div>
    )
}