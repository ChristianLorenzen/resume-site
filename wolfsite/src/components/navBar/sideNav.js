import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../styles/sideNav.scss';

const SideNav = (props) => {

    return (
        <div className="App-header">
            <div className='App-header-name'>
            <h5>{props.name}</h5>
            </div>
            <div className='Social-icons-cont'>
                <a href="https://twitter.com/trulywolfgang" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><TwitterIcon className='Social-icon-img'/></a>
                <a href="https://github.com/ChristianLorenzen" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><GitHubIcon className='Social-icon-img'/></a>
                <a href="https://www.linkedin.com/in/christianwolfganglorenzen/" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><LinkedInIcon className='Social-icon-img'/></a>
            </div>
        </div>
    )
}

export default SideNav;
