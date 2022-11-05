import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../../styles/Flyer.scss';
import programDownload from '../../media/FlyerZIP.zip';
import cam1 from '../../media/cam1.jpg';
import videoWide from '../../media/autoTraderShow.mp4';
import Homepage from '../../components/projects/HomePage.js';
import { Link } from 'react-router-dom';
import ColumnShowcase from '../reactiveColumns/columnShow';

const Flyer = () => {
  gsap.registerPlugin(ScrollTrigger)
  const panels = useRef([]);
  const panelsContainer = useRef();
  const columnMenu = useRef([])
  const svgPaths = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  const createColumnMenuRefs = (column, index) => {
    columnMenu.current[index] = column;
  }

  useEffect(() => {
    const totalPanels = panels.current.length;

    let ctx = gsap.context(() => {
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + .4 * panelsContainer.current.offsetWidth,
          //onUpdate: self => console.log("progress: ", self.progress)
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

  return (
    <div>
      <div className="container" ref={panelsContainer}>
        <div className="panel blue" ref={(e) => createPanelsRefs(e, 0)}>
          <div className="blue-title">
            <h1>Flyer</h1>
            <h2>The market moves fast. Flyer moves faster</h2>
            <SlideLeftH3 text={String.raw`Flyer is an automated brokerage announcement system to be used with Discord.
                            It allows you to connect a brokerage account, and when trades are placed,
                            it automatically sends notifications to Discord, allowing for quick public announcements.`}
            />
          </div>
          <div className='blue-download'>
            <a href={programDownload} download={"Flyer.zip"}>
              <span className='text'>Download</span>
              <span className="line -right"></span>
              <span className="line -top"></span>
              <span className="line -left"></span>
              <span className="line -bottom"></span>
            </a>
          </div>
        </div>
        <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
          <ColumnShowcase />
        </section>
        <section className="panel purple" ref={(e) => createPanelsRefs(e, 2)}>
          <div className='purple-title'>
            THREE
          </div>
          <div className='column-three '>

          </div>
        </section>
        <div className='container-end-site'>

        </div>
      </div>

    </div>
  );
}

export default Flyer;