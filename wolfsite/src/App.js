import React from 'react'
import './styles/App.scss';

import { Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/projects/HomePage';
import IdleRPG from './components/projects/IdleRPG';
import AutoTrader from './components/projects/AutoTrader';
import VoxelRender from './components/projects/VoxelRenderer';
import Flyer from './components/projects/Flyer';


const App = () => {


  {/*useEffect(() => {
    const element = headerRef.current;
    gsap.to(element.querySelector(".App-header"),
      {
      position:'fixed',
      top:'0',
      display:"inline-block",
      background: 'transparent',
      width: '100%',
      height: '5%',
      bottom:'0px',
      alignContent: 'center',
      toggleClass:'navActive',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      }
    })
    gsap.to(element.querySelector('.App-header-name'),
    {
      flexDirection:'column',
      background: 'transparent',
      width: '4vw',
      height:'100%',
      alignItems: 'flex-start',
      writingMode: 'horizontal-tb',
      marginLeft: '1vw',
      marginRight: '1vw',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      },
    })
    gsap.to(element.querySelector('.Social-icons-cont'),
    {
      flexDirection:'row',
      background: 'transparent',
      width: '15%',
      height:'100%',
      writingMode: 'horizontal-tb',
      alignItems: 'center',
      justifyContent:'center',
      margin: '0',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      },
    })
    gsap.to(element.querySelectorAll('.Social-icon-link'),
    {
      margin: '0',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      },
    })
  }, [])*/}

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/IdleRPG' element={<IdleRPG />} />
      <Route path='/VoxelRenderer' element={<VoxelRender />} />
      <Route path='/Flyer' element={<Flyer />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );

}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
)};

export default App;
