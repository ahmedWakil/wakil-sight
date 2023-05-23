import './App.css'
import IntroBlock from './components/body/IntroBlock';
import About from './components/body/About';
import Projects from './components/body/Projects';
import Contact from './components/body/Contact';

import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  const PAGES = 4;

  const ref = useRef()
  const urlS = (number, index) => `./page-backgrounds/page-${number}/${number}-${index}.png`

  return (
    <main className='App' style={{ width: '100%', height: '100%' }}>
      <Parallax pages={PAGES} ref={ref}>



        {/* The first page background images*/}
        <ParallaxLayer
          offset={PAGES - 4}
          speed={0.5}
        >
          <div className='page-image-container'>
            <img src={urlS(1, 1)}></img>
          </div>
        </ParallaxLayer>

        {/* The first content page */}
        <ParallaxLayer
          offset={PAGES - 4}
          speed={1.2}>
          <IntroBlock />
        </ParallaxLayer>
        <ParallaxLayer className="page-change-button" offset={PAGES - 3.1} speed={0.1}>
          <button onClick={() => ref.current.scrollTo(PAGES - 3)}>
            <img src='./button-arrows/arrow-down.png'></img>
          </button>
        </ParallaxLayer>

        {/* The second page background images*/}
        <ParallaxLayer
          offset={PAGES - 3}
          speed={0.2}
        >
          <div className='page-image-container'>
            <img src={urlS(2, 1)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 3}
          speed={0.75}
        >
          <div className='page-image-container'>
            <img src={urlS(2, 2)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 3}
          speed={1.2}
        >
          <div className='page-image-container'>
            <img src={urlS(2, 3)}></img>
          </div>
        </ParallaxLayer>


        {/* The second content page */}
        <ParallaxLayer offset={PAGES - 3} speed={0.7}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer className="page-change-button" offset={PAGES - 2.1} speed={0.1}>
          <button onClick={() => ref.current.scrollTo(PAGES - 2)}>
            <img src='./button-arrows/arrow-down.png'></img>
          </button>
        </ParallaxLayer>

        {/* The third page background images*/}
        <ParallaxLayer
          offset={PAGES - 2}
          speed={1.2}
        >
          <div className='page-image-container'>
            <img src={urlS(3, 1)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 2}
          speed={0.7}
        >
          <div className='page-image-container'>
            <img src={urlS(3, 2)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 2}
          speed={0.2}
        >
          <div className='page-image-container'>
            <img src={urlS(3, 3)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 2}
          speed={0.7}
        >
          <div className='page-image-container'>
            <img src={urlS(3, 4)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 2}
          speed={1.2}
        >
          <div className='page-image-container'>
            <img src={urlS(3, 5)}></img>
          </div>
        </ParallaxLayer>


        {/* The third content page */}
        <ParallaxLayer offset={PAGES - 2} speed={0.7}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer className="page-change-button" offset={PAGES - 1.1} speed={0.1}>
          <button onClick={() => ref.current.scrollTo(PAGES - 1)}>
            <img src='./button-arrows/arrow-down.png'></img>
          </button>
        </ParallaxLayer>

        {/* The forth page background images*/}
        <ParallaxLayer
          offset={PAGES - 1}
          speed={0.2}
        >
          <div className='page-image-container'>
            <img src={urlS(4, 1)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 1}
          speed={0.5}
        >
          <div className='page-image-container'>
            <img src={urlS(4, 2)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 1}
          speed={0.9}
        >
          <div className='page-image-container'>
            <img src={urlS(4, 3)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 1}
          speed={1.7}
        >
          <div className='page-image-container'>
            <img src={urlS(4, 4)}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={PAGES - 1}
          speed={1.4}
        >
          <div className='page-image-container'>
            <img src={urlS(4, 5)}></img>
          </div>
        </ParallaxLayer>

        {/* The fourth content page */}
        <ParallaxLayer offset={PAGES - 1} speed={1.4}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer className="page-change-button" offset={PAGES - 0.1}>
          <button onClick={() => ref.current.scrollTo(0)}>
            <img src='./button-arrows/arrow-up.png'></img>
          </button>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}

export default App
