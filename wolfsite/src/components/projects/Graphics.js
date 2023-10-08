import React from "react";
import CardPanel from '../cardPanel/CardPanel.js';
import cam1 from '../../media/cam1.jpg';
import idleRPGMerchant from '../../media/GraphicsPage/IdleRPGMerchantStrippedAudio.mp4';
import desertGL from '../../media/GraphicsPage/DESERTRUN.mp4';
import postProcessing from '../../media/GraphicsPage/TEXTUREPOSTPROCESSING.mp4';
import sinWave from '../../media/GraphicsPage/SINWAVESIMUL.mp4';
import GerstnerWaves from '../../media/GraphicsPage/GerstnerWaves.mp4';
import TopNav from '../navBar/TopNav';
import '../../styles/WorkCardPanelScreens.scss';

const Graphics = () => {
    {/* 
    THE IDLERPGMERCHANT VIDEO HAS BABYTRON AUDIO STILL IN BACKGROUND. REMOVE
    */}
    const imageList = [
        {title: "0-01: Generations", desc: "Idle based RPG currently in development using the Unity game engine.", 
                fullDesc: "RPG game focused on idle mechanics. Grow and manage a tight knit group of workers to help you build up your villiage. Currently being developed using the Unity game engine and written in C#",
                src: '', url: 'https://novaze.itch.io/theforevergeneration', video: idleRPGMerchant, bigVid: idleRPGMerchant},
        {title: '0-02: Voxel Renderer', desc:"Perlin noise based voxel and biome generation", 
                fullDesc: "C++ and OpenGL based voxel rendering with Perlin Noise based terrain and vegetation generation.",
                src: '', url: '',  video: desertGL, bigVid: desertGL},
        {title: '0-03: SIN WAVE', desc:"2D wave texturing with multi layer sin waves", 
                fullDesc: 'Written in C++ and glsl, while using OpenGL in combination with GLUT for the GUI. Uses a combination of sin waves with controllable parameters to create abstract wave like graphics. All wave characteristics can be changed realtime through a popup menu.',
                src: '', url: '', video: sinWave, bigVid: sinWave},
        {title: '0-04: Gerstner Wave', desc:"3D Gerstner Wave simulation shader", 
                fullDesc: 'Rendered in the Unity Game engine, shader for Gerstner wave simulation. Allows for multi wave controls with depth based Albedo, customizable refraction, and intersection based foam generation.',
                src: '', url: '', video: GerstnerWaves, bigVid: GerstnerWaves},
        {title: '0-05: POST PROCESSING', desc:"Post processing effects generated in C++ OpenGL", 
                fullDesc: "Written in C++, glsl, and using OpenGL with GLUT and GLEW. Effects include horizontal/vertical blurs, sepia filter, edge detection, oil effect filter, and swirl filter based on mouse location.",
                src: '', url: '', video: postProcessing, bigVid: postProcessing},
    ];


    const backgroundColor = "black";
    const textColor = 'white';
    const cardBackgroundColor = 'rgba(0, 100, 247, 0.2)';
    const cardTextColor = 'white';

    return (
        <div className='graphics-top-section' style={{backgroundColor: backgroundColor}}>
            <TopNav backgroundColor={backgroundColor} color={textColor}/>
            <div className='section-title' style={{color: textColor}}>
                    <div className='stretch-text-wrapper'>
                      <div>G</div>
                      <div>R</div>
                      <div>A</div>
                      <div>P</div>
                      <div>H</div>
                      <div>I</div>
                      <div>C</div>
                      <div>S</div>

                    </div>
            </div>
            <div className='graphics-card-panel'>
                <CardPanel images={imageList} backgroundColor={backgroundColor} color={textColor} 
                backgroundImage={cam1} cardBackgroundColor={cardBackgroundColor} cardTextColor={cardTextColor}/>
            </div>
            <div style={{position: 'relative', height: '80px', top: 0}}/>
        </div>
    )

}

export default Graphics;