import './article.css';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    scale: 0.9;
  }

  to {
    opacity: 1;
    scale: 1;
  }
`;


function About() {

    return (
        <div id="About" className='about-container'>
            <article className="article">
                <Fade
                    cascade
                    duration={600}
                    keyframes={customAnimation}
                >
                    <h1 className="about-heading">About me</h1>
                    <h2 className='about-subheading'>Wakil Ahmed</h2>
                    <p>
                        I like to research and develope things on the internet.
                        This is anything from Data science, and Machine learning to Software developement.
                        My interest started with mathematics when I went on to study at the <a href="https://www.utsc.utoronto.ca/home/">University of Toronto
                            Scarborough</a>, studying computer science. I mainly focused on the mathamatical side of computer
                        science such and data structures and numerical analysis. During my final years at UTSC I have grown a strong interest in Data science and Machine learning
                        and that is where I am today. I graduated with a Degree in Statistics with a specialization on
                        Data science and Machine learning at UTSC.
                    </p>
                </Fade>
            </article>
        </div>
    );
}

export default About