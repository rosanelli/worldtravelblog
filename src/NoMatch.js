import React from 'react';
import bugsBunny from './images/404.jpg';

const NoMatch = props => (
  <div className="text-center">
    <div className="row">
      <div className="col-md-8 offset-md-2 col-sm-12">
        <p className="h1">404</p>
        <img src={bugsBunny} className="img-fluid" alt="404" />
        <div className="alert alert-primary mt-3" role="alert">
          You should have taken that left turn at Albuquerque
        </div>
      </div>
    </div>
  </div>
)

export default NoMatch;