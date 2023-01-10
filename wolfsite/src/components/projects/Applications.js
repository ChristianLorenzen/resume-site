import React from "react";
import CardPanel from '../cardPanel/CardPanel.js';
import cam2 from '../../media/cam2.jpg';
import autoTraderInterface from '../../media/ApplicationsPage/autoTraderInterface.mp4';
import autoTraderShow from '../../media/ApplicationsPage/autoTraderShow.mp4';
import WasSite from '../../media/ApplicationsPage/WASSite.mp4';
import PhaseViewWaf from '../../media/ApplicationsPage/PhaseViewerWafer.png'
import SuperbrainSecurities from '../../media/ApplicationsPage/SuperbrainSecurities.mp4';
import TopNav from '../navBar/TopNav';

import '../../styles/WorkCardPanelScreens.scss';

const Applications = () => {

    {/* 
    THE IDLERPGMERCHANT VIDEO HAS BABYTRON AUDIO STILL IN BACKGROUND. REMOVE
    */}
    const imageList = [
        {title: '0-01: Flyer', desc:"Connects brokerage trades to Discord for notifications", 
                fullDesc: 'AutoTrader allows a user to connect to their Interactive Brokers account to send automated trade notifications to a Discord channel.',
                src: '', url: '/Flyer', video: autoTraderInterface, bigVid: autoTraderShow},
        {title: '0-02: Superbrain Securities', desc:"Automated trading platform", 
                fullDesc: 'Fully created Database/Backend/Frontend systems which allowed Alpaca trading platform users to connect their accounts. Once connected, we used multiple trading algorithms to determine best stock for users and make purchases on their accounts.',
                src: '', url: '', video: SuperbrainSecurities, bigVid: SuperbrainSecurities},
        {title: '0-03: Wavefront Analysis Systems', desc:"Public facing site for Wavefront Analysis Systems", 
                fullDesc: "To further cement our ambitious goals, I was charged with putting together a simple site to explain what Totagraphy is.",
                src: '', url: 'https://was.nyc',  video: WasSite, bigVid: WasSite},
        {title: '0-04: PhaseViewer', desc:"Web based visualizer for recovered phase images.", 
                fullDesc: "React based webapp for 3D visualization of images. Depth based 3D visualized used for phase information recovered from a Wavefront. Used leva for controls, and react-three/plotly for rendering.",
                src: PhaseViewWaf, url: '/Test',  video: '', bigVid: ''},

    ];

    const backgroundColor = 'rgb(30,30,30)'
    const textColor = 'pink';
    const cardBackgroundColor = 'rgba(30,30,30, .9)'

    return (
        <div className='application-top-section' style={{backgroundColor: backgroundColor, color: textColor}}>
            <div className='application-top-navbar'>
                <TopNav backgroundColor={backgroundColor} color={textColor} />
            </div>
            <div className='section-title' style={{color: textColor}}>
                <div className='stretch-text-wrapper'>
                <div>A</div>
                <div>P</div>
                <div>P</div>
                <div>L</div>
                <div>I</div>
                <div>C</div>
                <div>A</div>
                <div>T</div>
                <div>I</div>
                <div>O</div>
                <div>N</div>
                <div>S</div>
                </div>
            </div>
            <div className='application-card-panel'>
                <CardPanel images={imageList} backgroundImage={cam2} backgroundColor={backgroundColor} cardBackgroundColor={cardBackgroundColor} textColor={textColor} />
            </div>
            <div style={{position: 'relative', height: '80px', top: 0}}/>
        </div>
    )
}



export default Applications;