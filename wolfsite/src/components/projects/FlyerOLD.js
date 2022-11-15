import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import {motion, useScroll, useTransform} from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/Flyer.scss';


const FlyerOLD = () => {
  gsap.registerPlugin(ScrollTrigger)

  const el = useRef([])
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };



  useEffect(() => {
    const totalPanels = panels.current.length;

    let ctx = gsap.context(() => {
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 2,
          //snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + .4 * panelsContainer.current.offsetWidth,
          onUpdate: self => console.log("progress: ", self.progress)
        }
      })
    })

    return () => ctx.revert();
  }, []);

  const SlideLeftH3 = (props) => {
    const ref = useRef()
    useEffect(() => {
      gsap.fromTo([ref.current], {
        x: '-100vw',
        duration: 1
      }, {
        x: '0'
      })
    })
    return (
      <div className='slide-text' ref={ref}>
        <h3>
          {props.text}
        </h3>
      </div>
    )
  }

  var end = 0;
  var panelWidth = 0;

  useEffect(() => {
    end = panelsContainer.current.offsetWidth;
    panelWidth = end / panels.current.length;
    console.log(panelWidth)
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest)
    })

  }, [])


  const { scrollYProgress } = useScroll({
    target: el,
  });

  const panel1 = useTransform(scrollYProgress, [0 ,.5], [0, 300])
  const panel2 = useTransform(scrollYProgress, [.1, .5], [0, 200])
  const panel3 = useTransform(scrollYProgress, [.5, 1], [0, 300])
  const transformedScroll = useTransform(scrollYProgress, latest => latest * panelWidth)


  return (
    <div className='flyer' ref={el}>
      <motion.div className="container" ref={panelsContainer}>
        <div className='App-home-icon'>
        </div>
        <div className="panel blue offwhite" ref={(e) => createPanelsRefs(e, 0)}>
          <div className="blue-title">
            <h1>Flyer</h1>
            <h2>The market moves fast. Flyer moves faster</h2>
            <SlideLeftH3 text={String.raw`Flyer is an automated brokerage announcement system to be used with Discord.
                            It allows you to connect a brokerage account, and when trades are placed,
                            it automatically sends notifications to Discord, allowing for quick public announcements.`}
            />
          </div>
          <div className='blue-download'>
            <a >
              <span className='text'>Download</span>
              <span className="line -right"></span>
              <span className="line -top"></span>
              <span className="line -left"></span>
              <span className="line -bottom"></span>
            </a>
          </div>
          <motion.div className='bird-fly' style={{x: panel2, zIndex: 10}} >

          </motion.div>
        </div>
        <section className="panel offwhite" ref={(e) => createPanelsRefs(e, 1)}>
          <motion.div className="float-box " style={{ x: panel2,  background: 'salmon' }}/>
        </section>
        <section className="panel offwhite" ref={(e) => createPanelsRefs(e, 2)}>
          <div className='purple-title'>
            THREE
          </div>
          <div className='column-three '>

          </div>
        </section>
        <div className='container-end-site'>

        </div>
      </motion.div>

    </div>
  );
}

export default FlyerOLD;