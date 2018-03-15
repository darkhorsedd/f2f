import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
class About extends Component {
  render() {
    return (
        <div id="Contact">
           <TopNavigation />

           <div className="f2fBox" >
                 <div className="column-content">
                     
                 </div>
              </div>

              <div className="container"> 
                  <div className="spacer100">
                  </div>
            
              </div>
              <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-center"> 
                      <div class="row">
                            <div className="col-lg-12 aboutBox">
                                 <h3 className="purpleText">About</h3>
                                 <h2>WE ARE AN AGENCY <br/>
                                 OF CHANGE</h2>

                                   <p>
                                   WE ARE NOT A TRADITIONAL AGENCY. <br/>
                                   OR A DIGITAL AGENCY. <br/>
                                   OR A SOCIAL AGENCY. <br/>
                                   WE ARE A CHANGE AGENCY.<br/>
                                   
                                   <br/>
                                   One that believes in the power of creativity to have a transformational<br /> effect on companies, brands and communities. 
                              
                                   </p>
                                   
                            </div>
                       </div>
               </div>
               <div className="container"> 
                  <div className="spacer100">
                  </div>
                  <div className="spacer100">
                  </div>
              </div>
               <div className="container aboutbg" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-center"> 
                 
                      <div class="row">
                            <div className="col-lg-12 about ">
                             <center> 
                                 
                                 <h3 className="purpleText">Face to Face</h3>
                                 <h2>WE ARE A CHANGE AGENCY </h2>
                                 <p>Bring us your biggest problem. That's all we ask.

</p>


                             </center>

                        

                            </div>
                       </div>
                       <br /><br/><br/>
                       <div class="row">
                            <div className="col-lg-3"><img src="assests/images/creativity.png" /></div>
                            <div className="col-lg-3"><img src="assests/images/technology.png" /></div>
                            <div className="col-lg-3"><img src="assests/images/statergy.png" /></div>
                            <div className="col-lg-3"><img src="assests/images/branding.png" /></div>
                        </div>    
                        <br /><br/><br/>
                </div>            
               <div className="container"> 
                  <div className="spacer100">
                  </div>
            
              </div>
               
  <Footer/>
        </div>

        
    );
}
}

export default About;
