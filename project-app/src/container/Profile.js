import React, { Component } from 'react';

export default class Profile extends Component {
  render(){
    return(
      <div>
      <center style={{ paddingTop: '60px'}}><img src="https://image.ibb.co/hmFCQm/onestop.jpg" style= {{height: '250px', width: '660px' }} className ="img-fluid" alt="Responsive image" /></center>
            <section id="feature-one" >
                      <div className ="container">
                          <div className ="feature-content">
                              <div className ="row">

                                  <div className ="col-lg-5 col-lg-offset-1">
                                          <h2>Welcome to OneStop Kitten</h2>
                                          <p className ="lead">OneStop Kitten build in 2017 by Mr. PS who love the cat so much and he want to take care them by his heart.</p>
                                          <p className = "lead">So he determined to build this place for people who love cats like him. He chosen a modern style to decorate, because this is an easy way to manage. </p>
                                  </div>
                                  <div className ="col-lg-6 hidden-md">
                                      <img src="https://images.unsplash.com/photo-1491764317679-2d993424ff66?dpr=1&auto=format&fit=crop&w=3950&q=60&cs=tinysrgb" alt="Homecat" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
      </div>
    );
  }
}
