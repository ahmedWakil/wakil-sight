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
                        Tinkering. If I had to craft a one-word description of myself it'd be that word. 
                        I've always been interested in tinkering with technology, and I'm fascinated by how even the smallest technologies, new or old, have 
                        defining impacts on people's lives. I do consider myself a lifelong learner, since that is something that comes naturally through 
                        tinkering, and I like to research and explore creative uses of technology to make something incredibly useful or simply entertaining. 
                        I have a keen interest in all areas of computer science, and Machine Learning in particular as it was my area of study during my 
                        undergrad at the University of Toronto.<br/>
                        Outside of work I enjoy creating art, music, and quality tea, and I do have a natural creative side that I think bleeds well into 
                        my work in technology. I took an interest in playing the piano during my grade school years - my favorite genre to play is jazz, and my long 
                        term goal is to be able to play with other jazz musicians.<br/>
                        I'm also an avid fan of RPGs (role-playing games) of any form. I love the inherent adventure 
                        and fantasy of exploring an unknown magical realm. I built the theme of this website around this aspect of myself, and as I tinker 
                        with the design, the final goal is to create a unique space that speaks to my personality.<br/>
                        If you'd like to chat about the latest and greatest news in NLP or discuss obscure bits of DnD lore, my contacts are always open! 
                        I'll always welcome the chance to talk about something new to tinker with, and if not, a chat is still a great excuse to make myself tea. 
                    </p>
                </Fade>
            </article>
        </div>
    );
}

export default About
