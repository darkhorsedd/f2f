import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import Fade from 'react-reveal/Fade';
import Parallax from 'parallax-js'
import YouTube from 'react-youtube';
import Slider from 'react-slick';
class Home extends Component {

    componentDidMount()
    {

        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
          });

          var scene2 = document.getElementById('scene2');
          var parallaxInstance2 = new Parallax(scene2, {
              relativeInput: true
            });
            console.log('%c       ', 'font-size: 100px; background: url(http://cdn.nyanit.com/nyan2.gif) no-repeat;');
            console.log("Don't poke your nose ... Just go");
    }
  render() {

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          version:3,
          showinfo:0,
          controls:0,
          loop:1,
          playlist:'Z784IKM3EAI',
          modestbranding:0,
          
        }
      };
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth:false,
        autoplay:true
        
      };


    return (
          <div>
          <TopNavigation />
              <div id="fullwidthbg" >
              
                 <div className="column-content">
                      <div className="center-text"  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                         <h6>we are</h6>
                      <h2>face to face <span>| </span> mcgarry bowen</h2>
                      </div>
                 </div>
                      <img src="assests/images/arrow.png" className="scrollbtn bounce"/>
                      <video autoPlay loop muted id="video-bg">

                        <source src="http://facetofaceuae.com/videof2f.mp4" type="video/mp4" />

                    </video>
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
                  <h4>Work</h4>
                  <h2>It’s not creative unless it works</h2>
                </div>
                <div className="spacer50"></div>
                <div className="row" id="workspample" >
               
                   <div className="col-lg-4 col-sm-6 col-xs-12">
                   <a href="#/Portfolio/VIMTO-RAMADAN-SNAPCHAT" className="alink">
                        <div className="workBlock" data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="00" data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-center">
                              <img src="assests/images/work/image.jpg"  className="fullimage"/>
                              <div className="projectWrapper" >
                                  <div className="projectContent purple" data-aos="fade-in"  data-aos-duration="2500" >
                                  <div className="arrow-up arrow-color-purple"></div>
                                         <p>Aujan Group</p>
                                         <h3>VIMTO RAMADAN<br />SNAPCHAT</h3>
                                         <p>Vimto is a century-old brand, long-established as a fixture at the family Iftar table at Ramadan.</p>
                                          
                                         
                                  </div>
                               </div>
                        </div>
                        </a>
                    </div>
                          
                   <div className="col-lg-8 col-sm-6 col-xs-12"> 
                              <div className="row">
                              
                                  <div className="col-lg-12 col-sm-12 col-xs-12" >
                                    <a href="#/Portfolio/100-YEARS-OF-ZAYED" className="alink"> <div className="workBlock" data-aos="zoom-in-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-center">
                                         <img src="assests/images/work/etihad.jpg"  className="fullimage" />
                                            <div className="projectWrapperVertical" data-aos="zoom-in-left">
                                               <div className="projectContent orange">
                                                   <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-offset="300" data-aos-duration="700">Etihad Aviation Group</p>
                                                   <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-offset="400" data-aos-duration="800">100 YEARS OF ZAYED</h3>
                                                   <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-offset="500" data-aos-duration="900">As the national carrier of the UAE, Etihad is part of the fabric of the establishment.</p>
                                                </div> 
                                            </div>

                                     </div></a>
                                  </div>
                                  
                               </div>
                               <div  className="row padding-top ">
                               
                                  <div className="col-lg-6 col-sm-6 col-xs-12 ">
                                  <a href="#/Portfolio/Parker-Jotter-London" className="alink">
                                     <div className="workBlock" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom" >
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
                                  <a href="#/Portfolio/RANI-SUPER-ORANGE" className="alink">
                                     <div className="workBlock" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom">
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

                              <a href="#/Work" className="allproject"><div className="buttonWrapper-black black fright">
                                                <span className="buttontext"> view all projects </span>
                                               <div className="borderboxbutton blackbutton">

                                               </div>
                                           </div></a>
                   </div>
                </div>


             </div>

             <div className="spacer100">
                     
             </div>

             <div className="horizontalLine"></div>
             
             <div className="spacer100"></div>
                  
                  
             <div id="about" className="container" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="center-center"> 
                   <div className="row">
                       <div className="col-lg-12 aboutwrapper" >

                       <div id="scene" className="scene" data-hover-only="true"> 
                         <div data-depth="0.1" > 
                          <h4 >About</h4>

                          <h2>We are an agency<br/> of change</h2>
                          </div>     
                       </div>
                          <p>
                          One that believes in the power of creativity to have a <br />
                          transformational effect on companies, brands and communities.  <br/><br/>
                          Bring us your biggest problem. That's all we ask.   
                          </p>     

                          <a href="#/about" ><div className="buttonWrapper-black black">
                                                <span className="buttontext" > Learn more </span>
                                               <div className="borderboxbutton blackbutton">

                                               </div>
                                           </div></a>
                      </div>   
                   </div>

             </div>

             <div className="horizontalLine"></div> 
             <div className="container"> 
                <div className="spacer100">
                 
                </div>
            </div>


            <div id="culture" className="container" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="center-center"> 
                   <div className="row">
                       <div className="col-lg-12 culturewrapper">
                         <div id="scene2" className="scene" data-hover-only="true">
                            <div data-depth="0.1">
                          <h4 >Culture</h4>

                          <h2 >Good People.<br/> Great Work.</h2>
                            </div>
                                        
                        </div>
                          <p>
                          We’re a group of good people. Gathered together over the years, <br/>
                          a collective of right-minded individuals, producing great work <br/>
                          for clients we’re proud to represent.   <br/>
                          </p>     

                          <a href="#/culture"><div className="buttonWrapper-black black fright">
                                                <span className="buttontext"> Learn more </span>
                                               <div className="borderboxbutton blackbutton">

                                               </div>
                                           </div></a>
                      </div>   
                   </div>

             </div>
           
             <div className="horizontalLine"></div> 
             <div className="container"> 
                <div className="spacer100">
                 
                </div>
            </div>

            <div id="clientlogodiv">
              <div  id="homeclientlogo" className="container">
                     <div className="row">
                     <Slider {...settings}>
                     <img src="http://www.facetofaceuae.com/newimages/logos/1.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/2.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/3.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/4.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/5.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/6.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/7.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/8.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/9.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/10.jpg" alt="..." class="img-thumbnail" />
                     <img src="http://www.facetofaceuae.com/newimages/logos/11.jpg" alt="..." class="img-thumbnail" />

                    </Slider>
                     </div>
              </div>
            </div>

            
           <Footer />

          
          </div> 

            

    ); 
  }
}

export default Home;