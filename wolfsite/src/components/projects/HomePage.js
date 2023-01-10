import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../styles/HomePage.scss';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mountainsGL from '../../media/GraphicsPage/mountainsOPENGL.mp4';
import SideNav from '../navBar/sideNav';
import ColumnShowcase from '../reactiveColumns/columnShow';
import wLogo from '../../media/logo.png'


const MainPage = () => {
  const headerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)



 
  useEffect(() => {
    const element = headerRef.current;
    gsap.to(element.querySelector(".App-content-intro"),

      {
        y:'50%',
        duration: 2,
        opacity: 0.0,
        scrollTrigger: {
          trigger: element.querySelector(".App-top-content"),
          start: '60% center',
          end: 'center center',
          scrub:'true',
          scrub:2,
          opacity: 0.0,
        }
      },
    );
  }, []);



  
  const SlideLeftH3 = (props) => {
    const ref = useRef()
    useEffect(() => {
      gsap.fromTo([ref.current], 
      {
        x:'100vw',
        duration: 4
      }, 
      {
        x:'0'
      })
    })
    return (
      <div ref={ref} className={props.className}>
        <h3>
          {props.title}
        </h3>
        <p style={{color: 'white', fontSize: 'calc(10px + 1.0vmin)'}}>
          {props.text}
        </p>
      </div>
    )
  }


  return (
      <div className="App" ref={headerRef}>
        <div className='App-top-content'>
          <SideNav name={'wolfgang'} />
          <div className='App-content-intro'>
                {/*<SlideLeftH3 className='App-content-intro-text' title={'Graphics, Full-Stack, Financial, and Optical Applications'} 
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Bibendum ut tristique et egestas quis. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Ac placerat vestibulum lectus mauris ultrices eros in cursus. `}
                />*/}
                <div className='eva-testing'>
                  <h2 className='eva-testing-header'>GRAPHICS</h2>
                  <h2 className='eva-testing-header'>FULL-STACK</h2>
                  <h2 className='eva-testing-header'>& Financial</h2>
                  <h1 className='eva-testing-header'>APPLICATIONS</h1>

                  <p className='eva-testing-p'>My name is Christian and I am a 2022 graduate of Purdue University with a major in computer science
                  and a minor in finance. I have most recently worked at Superbrain Securities writing Financial software and Wavefront Analysis Systems working on optical hardware and software.
                  Prior to that, I worked in sales and electronic repair.</p>
                  <span className='split-content'></span>
                  <p className='eva-testing-p'> I am using this currently as a portfolio to show and link to different projects I have/am working on which are shown below.
                  Please feel free to reach out.</p>
                </div>
                {/*<div className='eva-testing'>
                  <h2 className='eva-testing-header'>GRAPHICS</h2>
                  <h2 className='eva-testing-header'>FULL-STACK</h2>
                  <p className='eva-testing-p'>My name is Christian and I am a recent graduate of Purdue University with a major in computer science
                  and a minor in finance. I am using this currently as a portfolio to show and link to different projects I have/am working on.
                  Please feel free to reach out.</p>
              </div>*/}
          </div>     
        </div>
        {/*<div className='App-top-content-transition-showcase'>
          <span></span>
          <motion.div className='about-likes about-flex' initial={{ opacity: 0 }} whileInView={{ opacity: 1,  transition: {duration: 1} }}>
            <h2>
                A Quick Background
            </h2>
            <p>
              I am a software developer and 2022 graduate of Purdue University. 
              In highschool I worked as a salesman and repairman at a local electronics shop which was instrumental in my hardware backgorund.
              I then attended Purdue University and received a major in Computer Science with a focus on graphics, and a minor in finance.
              During my time at Purdue, I was hired at Wavefront Analysis Systems to work on an automated stock trading application as well as
              work on a new generation of metrology hardware and software.
            </p>          
          </motion.div>
          <motion.div className='about-content about-flex' initial={{ opacity: 0 }} whileInView={{ opacity: 1,  transition: {duration: 1} }} >
            <h2>
              Live through learning
            </h2>
            <p>
              From work to my outside interests, I have a very large and varied pool of interests. I believe growth often comes from experience. From game dev, finance, optics,
              networking, graphics, music and embedded systems, I try to expand my toolset to as many areas of software development as I can.
            </p>  
          </motion.div>
          <motion.div className='about-experience about-flex' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: {duration: 1} }} >
            <h2>
                Work
            </h2>
            <p>
              The projects I have worked on and been a part of have allowed me a wide range of experience and I cherish them greatly. The larger projects I have worked on have included:
              <ul className='work-list'>
                <li>Superbrain Securities: An automated trading react based web app and Flask Python backend which used machine learning and developed financial algorithms to pick stocks</li>
                <li>Wavefront Analysis Systems: Work on expanding wavefront phase recovery techniques using developed methodology and machine learning</li>
                <li>Flyer: A Python based automated messaging system allowing trades from your brokerage to be sent to Discord as a stock calling program</li>
                <li>Generations: An idle RPG game focused on idle game loops and worker management</li>
              </ul>
            </p>  
          </motion.div>
              </div>*/}
        <div>
          <ColumnShowcase />
        </div>
        {/*<div className='App-top-content-showcase-transition'>
          <div className='App-contact-top-text'>
            <p>I love to talk ideas. Whether it's design, software development, new computer hardware,
               general subjects, or just questions, I'm always open to talk. </p>
          </div>
          <div className='contact-link-horizonal-bar-wrapper'>
            <h3>Reach out</h3>
            <div className='contact-link-horizontal-bar'>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href='https://www.github.com' target="_blank" rel="noopener noreferrer">Github</a>
              <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href='mailto: christain.lorenzen119@gmail.com'>Email</a>
              <a href="google.com" download="ChristianLorenzenResume">Resume</a>
            </div>
          </div>
            </div>*/}
      </div>
  );
}

export default MainPage;