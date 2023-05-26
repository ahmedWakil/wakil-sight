import './IntroBlock.css';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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

function IntroBlock() {

  return (
    <article className="intro-container">
      <Fade
        cascade
        duration={500}
        keyframes={customAnimation}
      >

        <p>Hi, my name is</p>
        <h1 className="intro-name">Wakil Ahmed</h1>
        <h2 className="intro-profession">Building moving web applications</h2>
        <p> I have a wide veriety of interests and experience in Data Science,
          Machine Learning and Software Engineering.

          I am passionate about taking my interdisciplinary expertise and
          applying them in new ways to help build something useful.
        </p>
      </Fade>
    </article>
  )
}

export default IntroBlock;