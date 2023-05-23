import './contact.css';
import { Fade, Reveal } from "react-awesome-reveal";
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

function Contact() {
    return (
        <div className='contact-container'>
            <Fade
                cascade
                duration={400}
                className='fade-container'
                keyframes={customAnimation}
            >
                <article className="contact-layout">

                    <h1 className='contact-heading'>Contact me</h1>
                    <section className="contact-message">
                        <h2>Send a message</h2>
                        <p>If you want to speak to me, I will be happy to answer emails as soon as possible</p>
                    </section>
                    <Reveal keyframes={customReveal} >
                        <section className="contact-information">
                            <h2>Reach out</h2>
                            <address>
                                <a href="mailto:ahmed.wakil.0019@gmail.com">ahmed.wakil.0019@gmail.com</a>
                            </address>
                        </section>
                    </Reveal>

                </article >
            </Fade>
        </div>
    )
}

export default Contact;