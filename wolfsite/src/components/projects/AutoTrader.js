import React, {useRef, useEffect } from 'react';
import '../../styles/AutoTrader.scss'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AutoTraderPNG from '../../media/AutoTrader.png'

const AutoTrader = () => {
    const headerRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)


    const SlideLeftH3 = (props) => {
        const ref = useRef()
        useEffect(() => {
          gsap.fromTo([ref.current], {
            x:'100vw',
            duration: 4
          }, {
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

    return (
        <div className='auto-trader-main'>
            <div className='auto-trader-header-cont'>
                <div className='auto-trader-header'>
                    <h1>Flyer</h1>
                    <h2>The market moves fast. AutoTrader move faster.</h2>
                    <div className='auto-trader-header-slide-left'>
                        <SlideLeftH3 text={String.raw`Flyer is an automated brokerage announcement system to be used with Discord.
                            It allows you to connect your brokerage account, and when trades are placed,
                            automatically send notifications to Discord, allowing for quick public announcements.`}
                        />
                    </div>
                </div>
            </div>
            <div className='auto-trader-desc-sec-1'>
                <img src={AutoTraderPNG} />
            </div>

        </div>
    )

}

export default AutoTrader;