import { useState } from "react";
import "./projects.css";
import PropTypes from "prop-types";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { animated, useSpring } from '@react-spring/web'

const customAnimation = keyframes`
  from {
    opacity: 0;
    scale: 0.85;
  }

  to {
    opacity: 1;
    scale: 1;
  }
`;

const customReveal = keyframes`
    from {
        opacity: 0;
        scale: 0.85;
        translate3d(0, -200px, -200px);
    }

    to {
        opacity: 1;
        scale: 1;
        translate3d(0, 0, 0);
    }
`;


function ProjectArticle(props) {

    const projectLinks = props.links.map((link) => (
        <a key={link.name} href={link.urlref}>{link.name}</a>
    ));


    return (
        <animated.article style={props.springStyles} className="projects-mini-article">
            <h1>
                {props.name}
            </h1>

            <p>
                {props.information}
            </p>

            <div>
                {projectLinks}
            </div>
        </animated.article>
    );
}

ProjectArticle.propTypes = {
    name: PropTypes.string.isRequired,
    information: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        urlref: PropTypes.string.isRequired
    })),
    springStyles: PropTypes.any
}

function Projects() {

    const projectData = [
        {
            name: "Songell",
            information: `This is a Fantasy name generator powered by a character level LSTM language model. It has been trained
                          to generate names from a veriety of playable races in the DnD universe, available as a web application. 
                          The model was pretrained using Pytorch on a dataset of Fantasy names from all over the internet combined with 
                          names from different languages and cultures. This is then converted to an ONNX model with the trained wieghts.
                          The web application uses ONNX runtime to sample names from the model.
                          `,
            links: [
                {
                    id: "a",
                    name: "Live App",
                    urlref: "https://ahmedwakil.github.io/Songell/"
                },
                {
                    id: "b",
                    name: "GitHub",
                    urlref: "https://github.com/ahmedWakil/Songell"
                },
                {
                    id: "c",
                    name: "Pytorch",
                    urlref: "https://pytorch.org/get-started/locally/"
                },
                {
                    id: "d",
                    name: "ONNX",
                    urlref: "https://onnxruntime.ai/"
                }]
        },
        {
            name: "Adventure-txt",
            information: `This is a command line text based adventure game.
                          The goal is to traverse a series of auto generated 
                          levels in order to find the exit to the next level.
                          The map generation was implemented using the Wave Function Collapse
                          algorithm. The algorithm takes in an archetypical input, 
                          and produces procedurally-generated outputs that look like it.
                          I modified this algoithm to work with the map templates which are
                          premade and kept inside json files. The program uses the Jackson library
                          to build a robust api that is able to interpret the jason files for
                          map generation`,
            links: [
                {
                    id: 'a',
                    name: "Github",
                    urlref: "https://github.com/ahmedWakil/Adventure-txt"
                },
                {
                    id: 'b',
                    name: "Wave Function Collapse",
                    urlref: "https://github.com/mxgmn/WaveFunctionCollapse"
                }
            ]
        },
        {
            name: "This website",
            information: `I wanted to build a modern looking website with industry standard 
                          tools from the ground up. I opted to use the react framework. This is
                          a modern framework that is open source. This allows you to have access to a whole network
                          of libraries built to work with react. One of them is react-spring
                          which animates react components using react hooks. This is the tool 
                          I used for all of the animations. I want this website to be an extension
                          of my personality so it will always be a work in progress, and will see
                          many changes. In future updates this website will be a full on Dnd fantasy adventure!
                          `,
            links: [
                {
                    id: 'a',
                    name: 'Github',
                    urlref: 'https://github.com/ahmedWakil/wakil-sight'
                },
                {
                    id: 'b',
                    name: 'React-Spring',
                    urlref: 'https://www.react-spring.dev/'
                },
            ]
        }
    ]


    const [currentIndex, setIndex] = useState(0);
    const [styles, api] = useSpring(() => ({
        from: { x: 0 },
    }));

    const projectButtons = projectData.map((project, index) => (
        <li key={project.name}>
            <button
                onClick={() => handleProjectSwitch(index)}
            >
                {project.name}
            </button>
        </li>
    ));

    function handleProjectSwitch(index) {
        const hasChangedPage = currentIndex !== index;

        api.start({
            from: {
                opacity: hasChangedPage ? 0.4 : 1,
                y: hasChangedPage ? 75 : 0,
                x: !hasChangedPage ? 20 : 0
            },
            to: {
                opacity: 1,
                y: 0,
                x: 0
            },
            config: {
                mass: 1,
                friction: 4,
                tension: hasChangedPage ? 80 : 700,
            }
        });

        setIndex(index);
    }

    return (
        <div className='projects-section-container'>
            <Fade
                cascade
                duration={700}
                keyframes={customAnimation}
            >
                <section className="projects-section">
                    <h1>Projects</h1>
                    <ProjectArticle
                        name={projectData[currentIndex].name}
                        information={projectData[currentIndex].information}
                        links={projectData[currentIndex].links}
                        springStyles={styles}
                    />
                    <Reveal keyframes={customReveal} >
                        <aside className="project-sidebar">
                            <ul>
                                {projectButtons}
                            </ul>
                        </aside>
                    </Reveal>
                </section>
            </Fade>
        </div>
    );
}

export default Projects;