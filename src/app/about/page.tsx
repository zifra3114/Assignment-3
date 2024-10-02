import Image  from "next/image"
import Picture from "../picture/logo.png"
import Header from "../components/header"
export default function About(){
    return(
     <div>
        <Header/>
        <div className="info">
        <div className="about">
            <h1>
                About Me
            </h1>
            <p>Hi, I&apos;m Zifra Firdous, a dedicated medical student with a growing passion for Artificial Intelligence. While I pursue my studies in the medical field, I am also deeply interested in how AI can revolutionize healthcare. By blending these two worlds, I aim to contribute to innovative solutions that enhance patient care and medical research. My journey is all about learning, exploring, and applying AI in ways that can make a real impact in the future of medicine</p>
        </div>
        <div className="position">
            <Image src={Picture} alt="Logo" />
        </div>
        </div>
     </div>
           
           

           
    )
}