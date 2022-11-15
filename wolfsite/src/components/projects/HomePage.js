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
          end: 'bottom center',
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
        <div className='App-home-icon'>
          <Link to="/" ><img src={wLogo} alt="logo" className='App-home-icon-styling'/></Link>
        </div>
        <div className='App-top-content'>
          <SideNav name={'wolfgang'} />
          <div className='App-content-intro'>
                <SlideLeftH3 className='App-content-intro-text' title={'Graphics, Full-Stack, Financial, and Optical Applications'} 
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Bibendum ut tristique et egestas quis. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus mattis molestie a iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Ac placerat vestibulum lectus mauris ultrices eros in cursus. `}
                />
                {/*<div className='eva-testing'>
                  <h2 className='eva-testing-header'>NEON</h2>
                  <h2 className='eva-testing-header'>GENESIS</h2>
                  <h1 className='eva-testing-header'>EVANGELION</h1>
                </div>*/}
          </div>     
        </div>
        <div className='App-top-content-transition-showcase'>
          <span></span>
          <motion.div
            className='about-likes about-hover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,  transition: {duration: 1} }}
          />
          <motion.div
            className='about-content about-hover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,  transition: {duration: 1} }}
          />
          <motion.div
            className='about-experience about-hover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: {duration: 1} }}

          />
        </div>
        <div>
          <ColumnShowcase />
        </div>
        <div className='App-top-content-showcase-transition'>
          <div className='App-contact-top-text'>
            <p>I love to talk ideas. Whether it's design, software development, new computer hardware,
               general subjects, or just questions, I'm always open to talk. </p>
          </div>

          <div className='spacer'>
            <video src={mountainsGL} loading="lazy" loop autoPlay muted />
          </div>
          <div className='contact-link-horizonal-bar-wrapper'>
            <div className='contact-link-horizontal-bar'>
              <a href="linkedin.com">Linkedin</a>
              <a href='github.com'>Github</a>
              <a href='twitter.com'>Twitter</a>
            </div>
          </div>
          <div className='home-section-title' >
            <div className='home-stretch-text-wrapper'>
              <div>C</div>
              <div>O</div>
              <div>N</div>
              <div>T</div>
              <div>A </div>
              <div>C</div>
              <div>T</div>
            </div>
          </div>
        </div>

      </div>
  );
}

export default MainPage;