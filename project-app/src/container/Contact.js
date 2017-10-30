import React, { Component } from 'react';
import MapHome from '../ui/Map';

export default class Profile extends Component {
  render(){

    return(
      <div>

                  <section id="" className ="feature-dark">
                     <div className ="container">
                         <div className ="feature-content">
                             <div className ="row">
                                 <div className ="col-lg-6 feature-caption">
                                    <h1>Contact</h1>
                                    <address>
                                      <h4 style={{paddingTop: '20px'}}>Opening Hours</h4>
                                      <h6>10.00am-17.30pm</h6>
                                      <h6>Mon-Sat ,6 days a week</h6>
                                      <br/>
                                      <p>Bahnhofpl., 8001 Zurich, Switzerland</p>
                                    </address>

                                 </div>

                             <div className ="col-lg-6 text-sm-center hidden-sm-down">
                            <MapHome />
                             </div>
                             </div>
                         </div>
                     </div>
                 </section>
      </div>
    );
  }
}
