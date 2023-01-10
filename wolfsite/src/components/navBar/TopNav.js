import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from './../../media/logo.png';
import "../../styles/TopNav.scss";

const TopNav = (props) => {
    const [menuToggled, setMenuToggled] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const menuToggle = () => setMenuToggled(value => !value);
    const checkScreenWidth = (newWidth) => { if (newWidth > 650) { setMenuToggled(false)}; setScreenWidth(newWidth);}

    useEffect(() => {

        const changeWidth = () => {
          checkScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
      }, [])

    return (

        <div className={menuToggled ? 'top-nav-container active' : 'top-nav-container'} style={(props.color === 'black' && menuToggled) ? {backgroundColor: 'white'} : {}}>
            <div className={menuToggled ? 'top-nav-link-layout active' : 'top-nav-link-layout'} >
                <div className={menuToggled ? 'screenBackground' : ''} />
                <Link to="/" className="top-nav-link-layout-element" style={{'color': props.color}}>
                    <p>HOME</p>
                    <span className="el-line" style={{background: props.color}} />
                </Link>
                <Link to="/Graphics" className="top-nav-link-layout-element" style={{'color': props.color}}>
                    <p>GRAPHICS</p>
                    <span className='el-line' style={{background: props.color}}/>
                </Link>
                <Link to="/Applications" className="top-nav-link-layout-element" style={{'color': props.color}}>
                    <p>APPLICATIONS</p>
                    <span className='el-line' style={{background: props.color}}/>
                </Link>
                <Link to="/OtherWork" className="top-nav-link-layout-element" style={{'color': props.color}}>
                    <p>OTHER WORK</p>
                    <span className='el-line' style={{background: props.color}}/>
                </Link>
                <button onClick={menuToggle} className="navbar-icon">
                    <div className="line line-top" style={{backgroundColor: props.color}}> </div>
                    <div className="line line-middle" style={{backgroundColor: props.color}}> </div>
                    <div className="line line-bot" style={{backgroundColor: props.color}}> </div>
                </button>
            </div>
        </div>
    )

}

export default TopNav;