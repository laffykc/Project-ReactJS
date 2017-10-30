import React, { Component } from 'react';
import HomePic from '../ui/HomePic';
import Feature from '../ui/Feature';


export default class Home extends Component {
  render(){
    return(
      <div>
      <HomePic />
      <Feature />
      </div>
    );
  }
}
