import React, { Component } from 'react';
import './Feature.css';
import { Link } from 'react-router';

export default class Feature extends Component {
  render(){
    return(
      <div>


      <section id="feature-one" >
                <div className ="container">
                    <div className ="feature-content">
                        <div className ="row">
                            <div className ="col-lg-6 hidden-md-down">
                                <img src="https://images.unsplash.com/photo-1467839024528-ac3042ac0ae7?dpr=1&auto=compress,format&fit=crop&w=3150&h=&q=80&cs=tinysrgb&crop=" alt="Macbook" />
                            </div>
                            <div className ="col-lg-5 col-lg-offset-1">
                                    <h6>The wow factor</h6>
                                    <h2>We will not let your cat alone.</h2>
                                    <p className ="lead">Pet like your family and always wait for you look after. Please do not let them alone and call us for a good caring.</p>
                                    <Link to ='/contact' role="button" className ="btn btn-outline-primary">Call us !</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="feature-two" className ="feature-dark">
               <div className ="container">
                   <div className ="feature-content">
                       <div className ="row">
                           <div className ="col-lg-6 feature-caption">
                               <h6>Incredible service</h6>
                               <h2>Fast, Friendly and Good Care Service.</h2>
                               <p className ="lead">We have a good team to support and take care your pet. And have a professional to manage OneStop Kitten. So we want to let you know about us about the service.</p>
                               <Link to ='/service' role="button" className ="btn btn-outline-secondary">Let me see</Link>
                           </div>

                       <div className ="col-lg-6 text-sm-center hidden-sm-down">
                           <img src="https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?dpr=1&auto=compress,format&fit=crop&w=3900&h=&q=80&cs=tinysrgb&crop=" alt="iphone" />
                       </div>
                       </div>
                   </div>
               </div>
           </section>
           <section id="feature-four" className ="feature-alt">
               <div className ="container">
                   <div className ="feature-content">
                       <div className ="row">
                          <div className ="col-lg-6 hidden-md-down">
                              <img src="https://images.unsplash.com/photo-1488261938500-59f02128e747?dpr=1&auto=compress,format&fit=crop&w=3900&h=&q=80&cs=tinysrgb&crop=" alt="Men" />
                           </div>
                           <div className ="col-lg-6">
                               <h6>Kudos</h6>
                               <blockquote className ="blockquote">
                                   &ldquo;All animals have hearts and feelings. Take care them like yours.&rdquo;
                                   <footer className ="blockquote-footer">
                                       Pongsan Kc, <cite>sixty century people</cite>
                                   </footer>
                               </blockquote>
                           </div>

                       </div>
                   </div>
               </div>
           </section>

           <footer id="main-footer" className ="feature-footer">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-md-6">
                            &copy; 2017 One-Stop Kitten is not a real thing. If it is, this site was not meant to be a mokery of it.<br/>
                            Coded by <a href="https://albertkc21.wordpress.com">Albert Kc</a>
                        </div>
                        <div className ="col-md-2">
                            <h6>Our Porduct</h6>
                            <ul className ="list-unstyled">
                                <li><a href="">Features</a></li>
                                <li><a href="">Solutions</a></li>
                                <li><a href="">Plans</a></li>
                                <li><a href="">Sign in</a></li>
                            </ul>
                        </div>
                        <div className ="col-md-2">
                                <h6>Our team</h6>
                                <ul className ="list-unstyled">
                                    <li><a href="">About</a></li>
                                    <li><a href="">Highlights</a></li>
                                    <li><a href="">Investors</a></li>
                                    <li><a href="">Partners</a></li>
                                </ul>
                        </div>
                        <div className ="col-md-2">
                                <h6>Our things</h6>
                                <ul className ="list-unstyled">
                                    <li><a href="">Jobs</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">FAQ</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
    );
  }
}
