import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from './signupActions';
import PropTypes from 'prop-types';

class SignupPage extends Component {
  render(){
    const { userSignupRequest } = this.props;
    return(
     <div className="row">
      <div className="col-md-4 col-md-offset-4">
      <SignupForm userSignupRequest={userSignupRequest} />

     </div>
     </div>
    );
  }
}
SignupPage.PropTypes = {
  userSignupRequest: PropTypes.func.isRequired
}
//export default SignupPage;
export default connect(null, { userSignupRequest })(SignupForm);
