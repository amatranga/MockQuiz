import React from 'react';

import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';

const Quiz = props => {
  return (
    <div className="row">
      <Q1 handleSelect={props.handleSelect} />
      <Q2 handleSelect={props.handleSelect} />
      <Q3 handleSelect={props.handleSelect} />
      <Q4 handleSelect={props.handleSelect} />
    </div>
  );
}

export default Quiz;
