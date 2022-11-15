import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion"
import '../../styles/horizontalScroll.scss'
import flyerLogo from '../../media/Flyer/FlyerLogo.png';
import panelWind from '../../media/Flyer/panelWind.svg';
import panelWindWide from '../../media/Flyer/panelWindWide.svg';
import wideTab from '../../media/Flyer/wideTab.svg';
import leaves1 from '../../media/Flyer/leaves1.svg';
import leaves2 from '../../media/Flyer/leaves2.svg';
import leaves3 from '../../media/Flyer/leaves3.svg';
import AutoTrader from '../../media/ApplicationsPage/AutoTrader.png';

const Flyer = () => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)
  const [viewportH, setViewportH] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
      setViewportH(window.innerHeight)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  
  const transformCrossPage = useTransform(
    scrollYProgress,
    [0, .2, .3, .5, .7, 1],
    [0, .1,.2,.3,.5,1.1]
  )

  const transformCrossPagePixels = useTransform(
    transformCrossPage,
    [0, 1.1],
    [0, scrollRange]
  )
  const transformVerticalSin = useTransform(
    transformCrossPagePixels,
    value => (-1)* Math.sin(value/800) * (viewportH * .6),
  )
    const checkH = () => {}
  transformVerticalSin.onChange(checkH)

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const transformExtraFast = useTransform(
    scrollYProgress,
    [0,1],
    [0,-600]
  )
  const transformExtraFastRight = useTransform(
    scrollYProgress,
    [0,1],
    [0,600]
  )
  const transformFast = useTransform(
    scrollYProgress,
    [0,1],
    [0,-300]
  )
  const transformFastRight = useTransform(
    scrollYProgress,
    [0,1],
    [0,400]
  )
  const transformMed = useTransform(
    scrollYProgress,
    [0,1],
    [0,-200]
  )
  const transformSlow = useTransform(
    scrollYProgress,
    [0,1],
    [0,-100]
  )

  const physics = { damping: 15, mass: 0.27, stiffness: 65 }
  const spring = useSpring(transform, physics)
  return (
    <>
      <div className="scroll-container" >
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="panels-container"
        >
          <div className="panels" style={{backgroundImage: `url(${wideTab})`, backgroundSize: '100% 100%'}}>
            <div className="thumbnail" >
                <div className="vh100 offwhite" >
                    <motion.div style={{backgroundImage: `url(${leaves1})`, backgroundSize: '100% 100%', x: transformFast, position: 'absolute', top:'0', left:'0', width:'100%', height:'100%'}} />
                    <motion.div style={{backgroundImage: `url(${leaves3})`, backgroundSize: '100% 100%', x: transformFastRight , position: 'absolute', top:'0', left:'0', width:'100%', height:'100%'}} />
                    <div className="blue-title">
                        <h1>Flyer</h1>
                        <h2>The market moves fast. Flyer moves faster</h2>
                        <p>Flyer is an automated brokerage announcement system to be used with Discord.
                                        It allows you to connect a brokerage account, and when trades are placed,
                                        it automatically sends notifications to Discord, allowing for quick public announcements.
                        </p>
                        <div className='blue-download'>
                            <a >
                            <span className='text'>Download</span>
                            <span className="line -right"></span>
                            <span className="line -top"></span>
                            <span className="line -left"></span>
                            <span className="line -bottom"></span>
                            </a>
                        </div>
                    </div>
                    <motion.div className='flyer-panel-1' style={{x: transformCrossPagePixels, y: transformVerticalSin }} >
                      {/*<img src={flyerLogo} />*/}
                    </motion.div>
                </div>
                <div className="vh100 offwhite">
                    <div className="panel-grid-cont">
                        <motion.div className="float-box float-left hover left" style={{ background: 'salmon' }}>
                          <div className="flex flex-col w60">
                            <h1 >Placeholder Title</h1>
                            <h3>This is a subtitle</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Bibendum ut tristique et egestas quis. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                          </div>
                          <div className="flex flex-col">
                            <img src={AutoTrader} style={{width:'100%', height: '100%', position: 'relative', contain: 'cover' }}/>
                          </div>
                        </motion.div>
                        <motion.div className="float float-box float-right hover up" style={{  background: 'grey' }}>
                          <div className="flex flex-col w60">
                            <h1 >Placeholder Title</h1>
                            <h3>This is a subtitle</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Bibendum ut tristique et egestas quis. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                          </div>
                          <div className="flex flex-col">
                            <img src={AutoTrader} style={{width:'100%', height: '100%', position: 'relative', contain: 'cover' }}/>
                          </div>
                        </motion.div>

                    </div>
                </div>
                <div className="vh100 offwhite">
                  <div className="panel-grid-cont">
                    <div className="grid-col-start-1 grid-col-span-2 grid-row-start-2 grid-row-span-1  w100 lightGreenBlue float hover right">
                          <div className="flex flex-col">
                            <h1 >Placeholder Title</h1>
                            <h3>This is a subtitle</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Bibendum ut tristique et egestas quis. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                          </div>
                    </div>
                    <div className='grid-col-start-4 grid-col-span-2 grid-row-start-1 grid-row-span-3 lightgrey '>
                      <div className="flex flex-col grid-col-start-4 grid-col-span-2 grid-row-start-1">
                        <h1 >Placeholder Title</h1>
                        <h3>This is a subtitle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Bibendum ut tristique et egestas quis. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                      </div>
                      <div className="grid-col-start-4 grid-col-span-2 grid-row-start-2 padding10">
                        <img src={AutoTrader} style={{height: '100%', width:'auto', objectFit: 'contain', padding:'auto' }}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}

export default Flyer