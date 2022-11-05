import React, {useState, useRef, useEffect} from 'react';
import {
    Link
} from 'react-router-dom';

const Card = (props) => {

    const cardRef = useRef(null);
    const [propStyle, setPropStyle] = useState([])
    const [style, setStyle] = useState([])
    const [offsets, setOffsets] = useState( {top: 0,left: 0})
    const [size,setSize] = useState({width:0,height:0})
    const [hoverProperties, setHoverProperties] = useState({perspectiveAmount: 1000, tiltAmount:6, scale:1.1});
    const [hoverStyle, setHoverStyle] = useState({transform: ''})
    const [clickStyle, setClickStyle] = useState({width: '85%',height: '90%',position:'fixed',top: '5%',margin: 'auto',padding: '0', zIndex:'5'})
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const cardElement = document.getElementById(props.section+props.index);
        const top = cardElement.offsetTop;
        const left = cardElement.offsetLeft;
        const width = cardElement.offsetWidth;
        const height = cardElement.offsetHeight;

        if (!(props.hoverProperties === undefined)) {
            const fullStyle = Object.assign({},hoverProperties,props.hoverProperties);
            setHoverProperties(fullStyle)
        }

        setSize({width,height})
        setOffsets({top,left})
        setPropStyle(props.style)
    }, [props.section, props.index, props.hoverProperties, props.style, hoverProperties]);

    const refreshOffsets = () => {
        const cardElement = document.getElementById(props.section+props.index);
        const top = cardElement.offsetTop;
        const left = cardElement.offsetLeft;
        setOffsets({top,left})
    }

    const MouseHover = ({ pageX, pageY}) => {
        if (!isClicked) {
            refreshOffsets();
            const cardWidth = size['width'];
            const cardHeight = size['height'];
            const centerX = offsets['left'] + cardWidth/2;
            const centerY = offsets['top'] + cardHeight/2;
            const mouseX = pageX - centerX;
            const mouseY = (pageY - window.innerHeight) - centerY;
            const rotateX = (hoverProperties['tiltAmount'] * mouseY/(cardHeight/2)).toFixed(1);
            const rotateY = (-hoverProperties['tiltAmount'] * mouseX/(cardWidth/2)).toFixed(1);
            const hoverUpdate = {transform : `perspective(${hoverProperties['perspectiveAmount']}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                                    scale3d(${hoverProperties['scale']},${hoverProperties['scale']},${hoverProperties['scale']})`,
                                zIndex:'3',
                                transitionDuration: '1s ease'
            };
            setHoverStyle(hoverUpdate);

            const fullStyle = Object.assign({},propStyle,hoverStyle);
            setStyle(fullStyle);
        }
    }

    useEffect(() => {
        console.log(isClicked)
    }, [isClicked])

    const MouseExit = () => {
        setIsClicked(isClicked => false)
        setStyle(propStyle);
    }

    const openCardImg = () => {
        setIsClicked(isClicked => !isClicked)
        if (!isClicked){
            const fullStyle = Object.assign({},propStyle,clickStyle);
            setStyle(fullStyle)

        } else {
            setStyle(propStyle)
        }
    }

    return (
        <div className="card" style={style} key={props.index} id={props.section+props.index} onMouseMove={MouseHover} onMouseLeave={MouseExit} onClick={() =>openCardImg()} ref={cardRef}>
            <div className="card-title">
                <div className='card-title-left'>
                    {isClicked ? <p className='card-title-title-text-clicked'>{props.image['title']}</p> : <p className='card-title-title-text'>{props.image['title']}</p>}
                    {(isClicked && props.image['fullDesc'] !== '') ? <p className='card-title-full-desc'>{props.image['fullDesc']} </p> : <p className='card-title-desc'>{props.image['desc']}</p>}
                </div>
                <div className='card-title-right'>
                    {props.image['url'] !== '' && isClicked && <Link to={props.image['url']} className='card-title-learn-more effectLight'><span>Learn More</span></Link>}
                </div>
            </div>
            <div className="card-image-cont">
                {/*If there is a video/bigVideo, add it to the card */}
                {(props.image['video'] !== '' && !isClicked) ?         
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                        <source src={props.image['video']} type="video/mp4" />
                    </video> 
                : null}
                {(props.image['video'] !== '' && isClicked) ?         
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                        <source src={props.image['bigVid']} type="video/mp4" />
                    </video> 
                : null}
                {props.image['src'] && <img src={props.image['src']} alt="cardImage" className='card-image' />}
            </div>
        </div>
    )
}

export default Card;