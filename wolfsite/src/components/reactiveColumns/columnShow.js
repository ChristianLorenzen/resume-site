import React from 'react';
import './columnShowStyling.scss';
import generationsVid from '../../media/GraphicsPage/IdleRPGMerchant.mp4';
import videoWide from '../../media/ApplicationsPage/autoTraderShow.mp4';
import voxel from '../../media/GraphicsPage/mountainsOPENGL.mp4';
import { Link } from 'react-router-dom';

const ColumnShowcase = () => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }


    return (
        <div className="panel">
          <div className='title'>
            <div className='title-sections'>

              {/*New Section Started*/}
              <div className='section transition-1-ease transition-1-delay column-black'>
                <div className='section-title transition-1-ease transition-1-delay'>
                    <div className='stretch-text-wrapper' style={{color: 'pink'}}>
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
                <div className='section-flex-box transition-1-ease transition-1-delay'>
                  <div className='section-info transition-half-ease transition-half-delay'>
                    <div className='section-info-title transition-1-ease transition-1-delay'>
                      <h3>OPENGL AND UNITY GRAPHICS</h3>
                    </div>
                    <div className='section-info-details'>
                      <div className='details-upper'>
                        <p>
                            EXPERIENCE WITH OPENGL, GLFW, UNITY AND UNREAL. MY FOCUS IN COLLEGE WAS COMPUTER GRAPHICS WHICH HELPED ME LEARN
                            MORE ABOUT RAYTRACING, GRAPHICS TEXTURING AND MORE. GAME DEVELOPMENT HAS MAINLY BEEN DONE THROUGH UNITY.
                        </p>
                      </div>
                      <div className='details-lower'>
                        <Link to="/Graphics" className='details-button ' style={{backgroundColor: 'pink', color:'black'}} onClick={scrollToTop}><span>More</span></Link>
                      </div>
                    </div>
                  </div>
                  <div className='section-display transition-1-ease transition-1-delay'>
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                      <source src={generationsVid} loading="lazy" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              {/*New Section Started*/}
              <div className='section transition-1-ease transition-1-delay column-white'>
                <div className='section-title transition-1-ease transition-1-delay'>
                  <div className='stretch-text-wrapper' style={{color: 'black'}}>
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
                <div className='section-flex-box transition-1-ease transition-1-delay'>
                  <div className='section-info transition-half-ease transition-half-delay'>
                    <div className='section-info-title transition-1-ease transition-1-delay'>
                      <h3>FINANCE AND OTHERS</h3>
                    </div>
                    <div className='section-info-details'>
                      <div className='details-upper'>
                        <p>
                            VARIETY OF APPLICATIONS NORMALLY REVOLVING AROUND FINANCE. PROGRAMS WRITTEN IN PYTHON USING QT 
                            AND IN REACT.
                        </p>
                      </div>
                      <div className='details-lower'>
                        <Link to="/Applications" className='details-button ' onClick={scrollToTop}><span>More</span></Link>
                      </div>
                    </div>
                  </div>
                  <div className='section-display transition-1-ease transition-1half-delay'>
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                      <source src={videoWide} loading="lazy" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              {/*New Section Started*/}
              <div className='section transition-1-ease transition-1-delay column-red'>
                <div className='section-title transition-1-ease transition-1-delay'>
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
                <div className='section-flex-box transition-1-ease transition-1-delay'>
                  <div className='section-info transition-half-ease transition-half-delay'>
                    <div className='section-info-title transition-1-ease transition-1-delay'>
                      <h3>ALGORITHMS, OPTICS AND MORE</h3>
                    </div>
                    <div className='section-info-details'>
                      <div className='details-upper'>
                        <p>
                          I HAVE IMPLEMENTED MANY FINANCIAL ALGORITHMS FOR AUTOMATED TRADING IN PYTHON AND C. EXPERIENCE WITH
                          CONVERTING AND EXPANDING MATLAB PROGRAMS DEALING WITH OPTICAL PHASE DATA RECOVERY. HAVE ALSO CREATED A CUSTOM
                          SHELL, A UNIX MEMORY ALLOCATOR, AND MANY OS FUNCTIONS IN XINU SUCH AS TRAPPING SYS CALLS, DYNAMIC PRIO SCHEDULING,
                          AND VIRTUAL PAGE TABLE CREATION AND MANAGEMENT.

                        </p>
                      </div>
                      <div className='details-lower'>
                        <Link to="/OtherWork" className='details-button ' onClick={scrollToTop}><span>More</span></Link>
                      </div>
                    </div>
                  </div>
                  <div className='section-display transition-1-ease transition-1half-delay'>
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                      <source src={voxel} loading="lazy" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ColumnShowcase;