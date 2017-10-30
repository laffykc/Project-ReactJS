import React from 'react';

const Servicecard = (props) => (
  <div className="col-12 col-sm-4" style = {{paddingTop: '7px'}}>
    <div className="card" style={{width: '20rem'}}>
      <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '5px', width: '100px' , height: '100px'}} src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-logo2.svg" alt="Card image cap"/>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
        <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
      </div>
     </div>
  </div>
);

export default Servicecard;
