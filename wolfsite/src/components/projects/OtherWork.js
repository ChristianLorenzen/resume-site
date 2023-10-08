import React from "react";
import CardPanel from '../cardPanel/CardPanel.js';
import redBlue from '../../media/redblueAb.jpg';
import DNSCode from '../../media/OtherWorkPage/DNSMonitorCode.png';
import CustomTerminalVid from '../../media/OtherWorkPage/TerminalShow.mp4';
import CustomMalloc from '../../media/OtherWorkPage/CustomMalloc.png';
import TopNav from '../navBar/TopNav';
import '../../styles/WorkCardPanelScreens.scss';

const OtherWork = () => {

    const imageList = [
        {title: "0-01: DNS Attack Suppression", desc: "Automatic DNS attack recognition and prevention", 
                fullDesc: "Using simulated networks with the p4 programming ecosystem. Rule based DNS attack prevention.",
                src: DNSCode, url: '', video: '', bigVid: ''},
        {title: '0-02: Linux Custom Terminal', desc:"Built up custom terminal with lexer, piped commands, inline-editing, process handling, and more.", 
                fullDesc: 'Custom terminal including features such as subterminals, background process handling, signal handling, multi command lexer, customization, and more. Written in C utilizing Bison for the lexer.',
                src: '', url: '', video: CustomTerminalVid, bigVid: CustomTerminalVid},
        {title: '0-02: Linux Custom Memory Allocator', desc:"Reimplemented linux malloc allowing for customized ruleset for memory allocation and handling.", 
                fullDesc: 'Written in pure C, it replecates the basic function malloc in a unix environment. Utilizes a multi-level linked list for priority/size based efficient allocation of new memory blocks.',
                src: CustomMalloc, url: '', video: '', bigVid: ''},
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