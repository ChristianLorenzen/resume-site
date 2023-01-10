import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion"
import '../../styles/horizontalScroll.scss'
import wideTab from '../../media/Flyer/wideTab.svg';
import leaves1 from '../../media/Flyer/leaves1.svg';
import leaves2 from '../../media/Flyer/leaves2.svg';
import leaves3 from '../../media/Flyer/leaves3.svg';
import AutoTrader from '../../media/ApplicationsPage/AutoTrader.png';
import FlyerMSGCreate from '../../media/Flyer/MsgCreator.png';
import FlyerMSGManager from '../../media/Flyer/MsgManager.png';
import HomePage from '../../media/Flyer/HomePage.png';

const Flyer = () => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)
  const [viewportH, setViewportH] = useState(0);
  const [faqOpen, setFaqOpen] = useState(
    new Array(4).fill(false)
  )

  const updateFAQ = (faqIndex) => {
    const updatedCheckedState = faqOpen.map((item,index) => 
      index === faqIndex ? !item : false
    )
    setFaqOpen(updatedCheckedState);
  }

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

  const physics = { damping: 15, mass: 0.27, stiffness: 30 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className="scroll-container" >
        <motion.section ref={scrollRef} style={{ x: spring, height: '100vh'}} className="panels-container">
          <div className="panels" style={{backgroundImage: `url(${wideTab})`, backgroundSize: '100% 100%'}}>
              <div className="panel-title transparent-background">
                  <motion.div style={{backgroundImage: `url(${leaves1})`, backgroundSize: '100% 100%', x: transformFast, position: 'absolute', top:'0', left:'0', width:'100%', height: window.innerHeight, backgroundSize: 'cover', zIndex: '0'}} />
                  <motion.div style={{backgroundImage: `url(${leaves3})`, backgroundSize: '100% 100%', x: transformFastRight , position: 'absolute', top:'0', left:'0', width:'100%', height: window.innerHeight, backgroundSize: 'cover', zIndex: '0'}} />
                  <div className="title-section font-color-white header-1-min header-2-min p-min" >
                      <h1>Flyer</h1>
                      <h2>The market moves fast. Flyer moves faster</h2>
                      <p>Flyer is an automated brokerage announcement system to be used with Discord.
                                      It allows you to connect a brokerage account, and when trades are placed,
                                      it automatically sends out notifications, allowing for quick public announcements.
                      </p>
                      {/*<div className='blue-download'>
                          <a href="#price_download_section">
                            <span className='text'>Download</span>
                            <span className="line -right"></span>
                            <span className="line -top"></span>
                            <span className="line -left"></span>
                            <span className="line -bottom"></span>
                          </a>
  </div>*/}
                  </div>
                  <motion.div className='flyer-panel-1' style={{x: transformCrossPagePixels, y: transformVerticalSin }} >
                    {/*<img src={flyerLogo} />*/}
                  </motion.div>
              </div>
              <div className="panel-general transparent-background">
                  <motion.div style={{ x: transformFastRight , position: 'absolute', top:'0', left:'0', width:'100%', height:'100%', zIndex:'-1'}} >
                    <img src={leaves2} style={{minHeight: '100%'}} />
                  </motion.div>
                  <div className="panel-grid-cont">
                      <div className="grid-row-start-1 grid-row-span-1 grid-col-start-1 grid-col-span-3 
                                      width100 height100 font-size-3vmin font-color-white flex flex-col font-color-white">
                        <h1 className="header-1-min">There when you need it, gone when you don't</h1>
                        <h5 className='header-5-min' style={{width: '60%'}}>Open, connect and forget. Two clicks gets you up and running and Flyer can be hidden in the background out of sight.</h5>
                      </div>
                      <motion.div className="float float-box float-left hover left box-shadow-medium-black padding-1 border-radius-10 " style={{ background: 'salmon' }}>
                        <div className="flex flex-col w60">
                          <h1 className="header-1-min">Send What You Want</h1>
                          <p className="p-min min-height-75px">Flyer allows you send custom formatted message or use the default message. 
                            You can choose what type of trades to send to each Discord channel you add and what data from the trade is shown.
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <img src={FlyerMSGCreate} style={{width:'100%', height: '100%', objectFit:'scale-down', overflow: 'hidden', position: 'relative' }}/>
                        </div>
                      </motion.div>
                      <motion.div className="float float-box float-right hover up box-shadow-medium-black padding-1 border-radius-10 hover-mobile-row" style={{  background: 'grey' }}>
                        <div className="flex flex-col w60">
                          <h1 className="header-1-min">Send When You Want</h1>
                          <p className="p-min min-height-75px">With easy access on both the home screen and the taskbar menu, you can pause notifications at any time allowing you to trade without notifying others.</p>
                        </div>
                        <div className="flex flex-col">
                          <img src={HomePage} style={{width:'100%', height: '100%', position: 'relative', objectFit:'scale-down', overflow: 'hidden', }}/>
                        </div>
                      </motion.div>
                  </div>
              </div>
              <div className="panel-general transparent-background">
                <div className="panel-grid-cont">
                  <div className="grid-col-start-1 grid-col-span-2 grid-row-start-2 grid-row-span-1  w100 lightGreenBlue float hover right box-shadow-medium-black padding-1 border-radius-10">
                        <div className="flex flex-col">
                          <h1 className="header-1-min">Send Where You Want</h1>
                          <p className="p-min">Flyer allows you to send specific trade types to a certain channel. 
                            When settings up a channel connection, Flyer allows you to specify between normal and option trading.
                            Then when trades are placed, Flyer filters the trade and only sends messages to a channel when the trade type is correct.
                          </p>
                          <div className="flex flex-col min-height-75px">
                          <img src={FlyerMSGManager} style={{width:'100%', height: '100%', position: 'relative', objectFit:'scale-down', overflow: 'hidden', }}/>
                        </div>
                        </div>
                  </div>
                  <div className='grid-col-start-3 grid-col-span-3 grid-row-start-1 grid-row-span-3 flex flex-col  align-content-center justify-content-between width-100 height-100 max-width-100' id="price_download_section">
                    <div className="grid-col-start-4 grid-col-span-2 grid-row-start-1 grid-row-span-2 flex flex-col align-content-center padding-1 width-80 flex-wrap">
                      <label className="collapsible-cont">
                        <input type="checkbox" checked={faqOpen[0]} onChange={() => updateFAQ(0)}/>
                        <div className="show-cont">
                          <span className='collapseItem header-3-min'><h3>Does Flyer Store My Information?</h3></span>
                          {/*<span className='arrowDown'>&gt;</span>*/}
                        </div>
                        <div className='collapsedItem p-min'>
                          <p>
                          No! Flyer makes no outside network connections apart from to your Broker and to Discord.
                          Once started, Flyer uses your running Trader Workstation application to get data without knowing your account login information at all. 
                          The connection to Discord works through web authentification and thus also does not have any access to account data.
                          </p>
                        </div>
                      </label>
                      <label className="collapsible-cont">
                        <input type="checkbox" checked={faqOpen[1]} onChange={() => updateFAQ(1)} />
                        <div className="show-cont">
                          <span className='collapseItem header-3-min'><h3>Why Do I Need Flyer?</h3></span>
                          {/*<span className='arrowDown'>&gt;</span>*/}
                        </div>
                        <div className='collapsedItem p-min'>
                            <p>
                            If you log your trades manually to another application or are in charge of making stock calls to others, Flyer can save you time. Flyer allows you to automatically send trading data to Discord with zero effort. In a fast moving market, a few seconds can change gains into losses.
                            Flyer allows you to focus on what really matters, making good calls, and less on manually logging your actions.
                            </p>
                          </div>
                      </label>
                      <label className="collapsible-cont">
                        <input type="checkbox" checked={faqOpen[2]} onChange={() => updateFAQ(2)}/>
                        <div className="show-cont">
                          <span className='collapseItem header-3-min'><h3>What Brokerages Work With Flyer?</h3></span>
                          {/*<span className='arrowDown'>&gt;</span>*/}
                        </div>
                        <div className='collapsedItem p-min'>
                          <p>
                            Currently the only supported Brokerage is Interactive Brokers. Depending on requests, more may be added. 
                          </p>                          
                        </div>
                      </label>
                      <label className="collapsible-cont">
                        <input type="checkbox" checked={faqOpen[3]} onChange={() => updateFAQ(3)}/>
                        <div className="show-cont">
                          <span className='collapseItem header-3-min'><h3>Where Can I Request Features?</h3></span>
                          {/*<span className='arrowDown'>&gt;</span>*/}
                        </div>
                        <div className='collapsedItem p-min'>
                          <p>
                            You can email me at christian.lorenzen119@gmail.com or message me through any of the contact options on the Home Page. 
                          </p>                        
                        </div>
                      </label>
                    </div>
                    <div className="grid-col-start-4 grid-col-span-2 grid-row-start-3 grid-row-span-1 flex flex-row flex-col-mobile align-content-center justify-content-around padding2 w80 height-50 price-styling">
                      <div className="w40 height-80 border-radius-25 flex flex-col align-content-center justify-content-start border-radius-10 antique-white-background price-level-styling">
                        <h1 className="padding-2 header-1-min">Free Tier</h1>
                        <h2 className="padding-2 header-2-min">Free now and always</h2>
                        <ul className="text-decoration-none list-style-none padding-10 text-align-left">
                          <li className="li-min">Connect using an open TWS application</li>
                          <li className="li-min">Up to 2 Discord channels</li>
                          <li className="li-min">All message options</li>
                        </ul>
                      </div>
                      <div className="w40 height-80 border-radius-25 flex flex-col align-content-center justify-content-start border-radius-10 antique-white-background price-level-styling">
                        <h1 className="padding-2 header-1-min">Paid Tier</h1>
                        <h2 className="padding-2 header-2-min">$????</h2>
                        <ul className="text-decoration-none list-style-none padding-10 width-80">
                          <li className="li-min">Connect using an open TWS application</li>
                          <li className="li-min">Unlimited Discord channels</li>
                          <li className="li-min">All message options</li>
                        </ul>
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