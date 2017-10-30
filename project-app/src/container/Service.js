import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Service extends Component {
  render(){
    return(
      <div>
      <div className ="card-deck text-center" style = {{paddingTop: '7px'}}>
  <div className ="card" style={{width: '20rem'}}>
    <img className ="card-img-top" src="https://images.unsplash.com/photo-1496436453575-d409fe300f98?dpr=1&auto=compress,format&fit=crop&w=3778&h=&q=80&cs=tinysrgb&crop=" alt="Card image cap" />
    <div className ="card-block">
      <h4 className ="card-title">Shower</h4>
      <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to ='/signup' role="button" className ="btn btn-outline-info">Let&apos;s Shower!</Link>
    </div>

  </div>
  <div className ="card" style={{width: '20rem'}}>
    <img className ="card-img-top" src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?dpr=1&auto=compress,format&fit=crop&w=3801&h=&q=80&cs=tinysrgb&crop=" alt="Card image cap" />
    <div className ="card-block">
      <h4 className ="card-title">Cut Hair</h4>
      <p className ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <Link to ='/signup' role="button" className ="btn btn-outline-info">Let&apos;s Cut Hair!</Link>
    </div>
  </div>
  <div className ="card" style={{width: '20rem'}}>
    <img className ="card-img-top" src="https://images.unsplash.com/photo-1493101561740-e745892775b2?dpr=1&auto=compress,format&fit=crop&w=3900&h=&q=80&cs=tinysrgb&crop=" alt="Card image cap" />
    <div className ="card-block">
      <h4 className ="card-title">Petition</h4>
      <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <Link to ='/signup' role="button" className ="btn btn-outline-info">Let&apos;s Petition!</Link>
    </div>
  </div>
</div>

<section id="feature-two" className ="feature-dark">
   <div className ="container">
       <div className ="feature-content">
           <div className ="row">
                <div className ="col-lg-6 text-sm-center hidden-sm-down">
                  <img src="https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?dpr=1&auto=compress,format&fit=crop&w=3900&h=&q=80&cs=tinysrgb&crop=" alt="iphone" />
                </div>
               <div className ="col-lg-6 feature-caption">
                   <h6>Incredible service</h6>
                   <h2>Fast, Friendly and Good Care Service.</h2>
                   <p className ="lead">We have a good team to support and take care your pet. And have a professional to manage OneStop Kitten. So we want to let you know about us about the service.</p>
                   <Link to ='/signup' role="button" className ="btn btn-outline-secondary">Sign up</Link>
               </div>

           </div>
       </div>
   </div>
</section>
</div>
    );
  }
}
