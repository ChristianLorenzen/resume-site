import React from 'react';
import './columnShowStyling.scss';
import generationsVid from '../../media/IdleRPGMerchant.mp4';
import videoWide from '../../media/autoTraderShow.mp4';
import voxel from '../../media/mountainsOPENGL.mp4';
import { Link } from 'react-router-dom';

const ColumnShowcase = () => {

    return (
        <section className="panel red">
          <div className='red-title'>
            <div className='red-title-sections'>

              {/*New Section Started*/}
              <div className='section transition-1-ease transition-1-delay grey'>
                <div className='section-title transition-1-ease transition-1-delay'>
                    <div className='stretch-text-wrapper'>
                      <div>G</div>
                      <div>E</div>
                      <div>N</div>
                      <div>E</div>
                      <div>R</div>
                      <div>A</div>
                      <div>T</div>
                      <div>I</div>
                      <div>O</div>
                      <div>N</div>
                      <div>S</div>
                    </div>
                </div>
                <div className='section-flex-box transition-half-ease transition-half-delay'>
                  <div className='section-info transition-half-ease transition-1-delay'>
                    <div className='section-info-title transition-1-ease transition-1-delay'>
                      <h3>example</h3>
                    </div>
                    <div className='section-info-details'>
                      <div className='details-upper'>
                        <p>this is a longer descriptive text to show how the wrapping works. This will hopefully give
                          a good example of layout.
                        </p>
                      </div>
                      <div className='details-lower'>
                        <p>This is some more text</p>
                      </div>
                    </div>
                  </div>
                  <div className='section-display transition-1-ease transition-1half-delay'>
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                      <source src={generationsVid} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              {/*New Section Started*/}
              <div className='section transition-1-ease transition-1-delay purple'>
                <div className='section-title transition-1-ease transition-1-delay'>
                  <div className='stretch-text-wrapper'>
                    <div>F</div>
                    <div>L</div>
                    <div>Y</div>
                    <div>E</div>
                    <div>R</div>
                  </div>
                </div>
                <div className='section-flex-box transition-half-ease'>
                  <div className='section-info transition-half-ease transition-1-delay'>
                    <div className='section-info-title transition-1-ease transition-1-delay'>
                      <h3>example</h3>
                    </div>
                    <div className='section-info-details'>
                      <div className='details-upper'>
                        <p>this is a longer descriptive text to show how the wrapping works. This will hopefully give
                          a good example of layout.
                        </p>
                      </div>
                      <div className='details-lower'>
                        <Link to="/" className='details-button effectLight'><span>Learn More</span></Link>
                      </div>
                    </div>
                  </div>
                  <div className='section-display transition-1-ease transition-1half-delay'>
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                      <source src={videoWide} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              {/*New Section Started*/}
              <div className='section transition-1-ease transition-1-delay red'>
                <div className='section-title transition-1-ease transition-1-delay'>
                  <div className='stretch-text-wrapper'>
                    <div>V</div>
                    <div>O</div>
                    <div>X</div>
                    <div>E</div>
                    <div>L</div>
                    <div> </div>
                    <div>P</div>
                    <div>R</div>
                    <div>O</div>
                    <div>J</div>
                    <div>E</div>
                    <div>C</div>
                    <div>T</div>
                  </div>
                </div>
                <div className='section-flex-box'>
                  <div className='section-info transition-half-ease transition-1-delay'>
                    <div className='section-info-title transition-1-ease transition-1-delay'>
                      <h3>example</h3>
                    </div>
                    <div className='section-info-details'>
                      <div className='details-upper'>
                        <p>this is a longer descriptive text to show how the wrapping works. This will hopefully give
                          a good example of layout.
                        </p>
                      </div>
                      <div className='details-lower'>
                        <p>This is some more text</p>
                      </div>
                    </div>
                  </div>
                  <div className='section-display transition-1-ease transition-1half-delay'>
                    <video loop autoPlay muted alt="cardImage" className='card-image'>
                      <source src={voxel} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default ColumnShowcase;