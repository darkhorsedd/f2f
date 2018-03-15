import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import Fade from 'react-reveal/Fade';
import Parallax from 'parallax-js'
class Work extends Component {

  render() {

    


    return (
          <div>
          <TopNavigation />
          <div className="workBox" >
          <div className="column-content">
              
          </div>
          </div>

             <div className="container"> 
                  <div className="spacer100">
                       <div className="horizontaline">
                         
                       </div>
                 </div>
                 <div className="spacer50">
                 </div>
             </div>

             <div id="work" className="container" > 
                <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-center">
                  <h4 className="bluecolor">Work</h4>
                  <h2>It’s not creative unless it works</h2>
                </div>
                <div className="row" id="workspample" >
               
                   <div className="col-lg-4 col-sm-6 col-xs-12">
                   <a href="#/Portfolio/100-YEARS-OF-ZAYED" className="alink">
                        <div className="workBlock" data-aos="fade-right" data-aos-duration="500" data-aos-offset="00" data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-center">
                              <img src="assests/images/work/image.jpg"  className="fullimage"/>
                              <div className="projectWrapper" >
                                  <div className="projectContent purple" data-aos="fade-in"  data-aos-duration="2500" >
                                  <div className="arrow-up arrow-color-purple"></div>
                                         <p>Aujan Group</p>
                                         <h3>VIMTO RAMADAN<br />SNAPCHAT</h3>
                                         <p>Fusce non ligula libero. Morbi egestas urna quis risus malesuada.</p>
                                          
                                          <a href=""><div className="buttonWrapper">
                                                <span className="buttontext"> View case study </span>
                                               <div className="borderboxbutton">

                                               </div>
                                           </div></a>
                                  </div>
                               </div>
                        </div>
                        </a>
                    </div>
                          
                   <div className="col-lg-8 col-sm-6 col-xs-12"> 
                              <div className="row">
                              
                                  <div className="col-lg-12 col-sm-12 col-xs-12" >
                                    <a href="#/Portfolio/100-YEARS-OF-ZAYED" className="alink"> <div className="workBlock" data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-center">
                                         <img src="assests/images/work/etihad.jpg"  className="fullimage" />
                                            <div className="projectWrapperVertical" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2200">
                                               <div className="projectContent orange">
                                                   <p>Etihad Aviation Group</p>
                                                   <h3>100 YEARS OF ZAYED</h3>
                                                   <p>Fusce non ligula libero. Morbi egestas urna quis risus malesuada.</p>
                                                </div> 
                                            </div>

                                     </div></a>
                                  </div>
                                  
                               </div>
                               <div  className="row padding-top ">
                               
                                  <div className="col-lg-6 col-sm-6 col-xs-12 ">
                                  <a href="#/Portfolio/100-YEARS-OF-ZAYED" className="alink">
                                     <div className="workBlock" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-bottom" >
                                        <img src="assests/images/work/parker.jpg"  className="fullimage" />
                                        <div className="projectWrapper">
                                                <div className="projectContent green">
                                                <div className="arrow-up arrow-color-green"></div>
                                                        <p>Parker Jotter London</p>
                                                        <h3>PARKER “CLICK”</h3>
                                                        
                                                </div>
                                            </div>  
                                      </div>  
                                      </a>
                                  </div>
                                 
                                 
                                  <div className="col-lg-6 col-sm-6 col-xs-12 ">
                                  <a href="#/Portfolio/100-YEARS-OF-ZAYED" className="alink">
                                     <div className="workBlock" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-bottom">
                                      <img src="assests/images/work/rani.jpg"  className="fullimage" />
                                      <div className="projectWrapper">
                                                <div className="projectContent yellow">
                                                <div className="arrow-up arrow-color-yellow"></div>
                                                        <p>Aujan Group</p>
                                                        <h3>RANI SUPER ORANGE</h3>
                                                        
                                                </div>
                                            </div>
                                     </div>  
                                     </a>
                                  </div>
                                 
                              </div>
                   </div>
                </div>


             </div>

             <div className="spacer100">
                     
             </div>

           
             
             <div className="spacer100"></div>
                  
                  



           
             <div className="horizontalLine"></div> 
             <div className="container"> 
                <div className="spacer100">
                 
                </div>
            </div>

            

            
           <Footer />

          
          </div> 

            

    ); 
  }
}

export default Work;