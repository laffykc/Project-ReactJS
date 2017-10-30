import React, { Component } from 'react';
import './HomePic.css';
export default class HomePic extends Component {

render(){
  return(
    <div id="carouselExampleIndicators" className ="carousel slide" data-ride="carousel" style={{paddingTop: '5px'}}>
  <ol className ="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className ="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className ="carousel-inner">
    <div className ="carousel-item active">
      <img className ="d-block w-100" style={{height: '500px', width: '100px'}} src="https://images.unsplash.com/photo-1457781124770-31d58ecd4be3?dpr=1&auto=compress,format&fit=crop&w=3900&h=&q=80&cs=tinysrgb&crop=" alt="First slide" />
      <div className="carousel-caption">
      <h3>Take a very good care</h3>
      <p>Take care your cat and kitten like Our family.</p>
      </div>
    </div>
    <div className ="carousel-item">
      <img className ="d-block w-100" style={{height: '500px', width: '100px'}} src="https://images.unsplash.com/photo-1495521939206-a217db9df264?dpr=1&auto=compress,format&fit=crop&w=3900&h=&q=80&cs=tinysrgb&crop=" alt="Second slide" />
      <div className="carousel-caption">
      <h3>Professional Work</h3>
      <p>we have a professional to take care.</p>
      </div>
    </div>
    <div className ="carousel-item">
      <img className ="d-block w-100" style={{height: '500px', width: '100px'}} src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?dpr=1&auto=compress,format&fit=crop&w=3890&h=&q=80&cs=tinysrgb&crop=" alt="Third slide" />
      <div className="carousel-caption">
      <h3>Happy Space And Devices</h3>
      <p>just keep going on your line.</p>
      </div>
    </div>
  </div>
  <a className ="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className ="sr-only">Previous</span>
  </a>
  <a className ="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="sr-only">Next</span>
  </a>
</div>


  );
}

}
