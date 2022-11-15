import React from "react";
import CardPanel from '../cardPanel/CardPanel.js';
import cam1 from '../../media/cam1.jpg';
import cam2 from '../../media/cam2.jpg';
import cam3 from '../../media/cam3.jpg';
import darkBackground from '../../media/darkBackground.jpg';
import redBlue from '../../media/redblueAb.jpg';
import idleRPGMerchant from '../../media/GraphicsPage/IdleRPGMerchant.mp4';
import autoTraderInterface from '../../media/ApplicationsPage/autoTraderInterface.mp4';
import autoTraderShow from '../../media/ApplicationsPage/autoTraderShow.mp4';
import grasslandsGL from '../../media/GraphicsPage/grasslandsOPENGL.mp4';
import mountainsGL from '../../media/GraphicsPage/mountainsOPENGL.mp4';
import TopNav from '../navBar/TopNav';
import '../../styles/WorkCardPanelScreens.scss';

const OtherWork = () => {
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
    ];

    const backgroundColor = 'rgb(206, 45, 79)';
    const textColor = 'white';
    const cardBackgroundColor = 'rgba(178, 247, 239, .2)';
    const panelBackgroundColor = 'black';
    const cardTextColor = 'white';

    return (
        <div className='otherwork-top-section' style={{backgroundColor: backgroundColor, color: textColor}}>
            <div className='otherwork-top-navbar'>
                <TopNav backgroundColor={backgroundColor} color={textColor} />
            </div>
            <div className='section-title' style={{color: textColor}}>
                <div className='stretch-text-wrapper'>
                <div>O</div>
                <div>T</div>
                <div>H</div>
                <div>E</div>
                <div>R</div>
                <div> </div>
                <div>W</div>
                <div>O</div>
                <div>R</div>
                <div>K</div>
                </div>
            </div>
            <div className='otherwork-card-panel'>
                <CardPanel images={imageList} backgroundColor={backgroundColor} color={textColor} 
                 backgroundImage={redBlue} cardBackgroundColor={cardBackgroundColor} cardTextColor={cardTextColor} panelBackgroundColor={panelBackgroundColor}/>
            </div>
            <div style={{position: 'relative', height: '80px', top: 0}}/>
        </div>
    )
}

export default OtherWork;