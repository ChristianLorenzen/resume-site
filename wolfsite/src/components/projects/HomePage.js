import React, {useEffect, useState, useRef} from 'react'
import '../../styles/App.scss';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardPanel from '../cardPanel/CardPanel.js';
import cam1 from '../../media/cam1.jpg';
import cam2 from '../../media/cam2.jpg';
import cam3 from '../../media/cam3.jpg';
import hillArea from '../../media/hillArea.png';
import idleRPGMerchant from '../../media/IdleRPGMerchant.mp4';
import autoTraderInterface from '../../media/autoTraderInterface.mp4';
import autoTraderShow from '../../media/autoTraderShow.mp4';
import grasslandsGL from '../../media/grasslandsOPENGL.mp4';
import mountainsGL from '../../media/mountainsOPENGL.mp4';
import SideNav from '../navBar/sideNav';
import ColumnShowcase from '../reactiveColumns/columnShow';

const MainPage = () => {
  const headerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)



 
  useEffect(() => {
    const element = headerRef.current;
    gsap.to(element.querySelector(".App-content-intro"),

      {
        y:'50vh',
        duration: 2,
        opacity: 0.0,
        scrollTrigger: {
          trigger: element.querySelector(".App-top-content"),
          start: '60% center',
          end: 'bottom center',
          scrub:'true',
          scrub:2,
          opacity: 0.0
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
      <div ref={ref}>
        <h3>
          {props.text}
        </h3>
      </div>
    )
  }

  {/* 
  THE IDLERPGMERCHANT VIDEO HAS BABYTRON AUDIO STILL IN BACKGROUND. REMOVE
  */}
  const imageList = [
    {title: "0-01: Generations", desc: "Game currently in development", 
            fullDesc: "RPG game focused on idle mechanics. Grow and manage a tight knit group of workers to help you build up your villiage.",
            src: '', url: '/IdleRPG', video: idleRPGMerchant, bigVid: idleRPGMerchant},
    {title: '0-02: Flyer', desc:"Connects brokerage trades to Discord for notifications", 
            fullDesc: 'AutoTrader allows a user to connect to their Interactive Brokers account to send automated trade notifications to a Discord channel.',
            src: '', url: '/Flyer', video: autoTraderInterface, bigVid: autoTraderShow},
    {title: '0-03: Voxel Renderer', desc:"OpenGL based voxel rendering", 
            fullDesc: "OpenGL based voxel rendering with Perlin Noise based terrain and vegetation generation with unique biomes",
            src: '', url: '/VoxelRenderer',  video: grasslandsGL, bigVid: mountainsGL},
    {title: 'bullet', desc:"PlanetScene", src: cam2, url: '', fullDesc: '', video: ''},
    {title: 'industry', desc:"PlanetScene", src: cam3, url: '', fullDesc: '', video: ''},
  ];

  return (
      <div className="App" ref={headerRef}>
        <div className='App-top-content' style={{}}>
          <SideNav name={'wolfgang'} />
          <div className='App-content-intro'>
                <SlideLeftH3 text={'Graphics, Full-Stack, Financial, and Optical Applications'}/>
                <p className='App-content-intro-intro'>Hey! My name is Christian but I often go by wolfgang online. I graduated from Purdue University in May 2022 with a major 
                  in Computer Science with a focus on computer graphics and a minor in finance. I've been working at Wavefront Analysis Systems since January 2020
                  where we have been pushing towards a new future for optical measurement.
                </p>
          </div>     
        </div>
        <div className="App-about-me">
          <CardPanel images={imageList} backgroundImage={cam2}/>
        </div>
        <div className='App-bottom-footer'>
          <ColumnShowcase />
        </div>
      </div>
  );
}

export default MainPage;