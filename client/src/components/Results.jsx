import React from 'react';

import Coolidge from './Coolidge';
import Ford from './Ford';
import Hw from './Hw';
import Ike from './Ike';
import Lincoln from './Lincoln';
import Reagan from './Reagan';
import Teddy from './Teddy';
import W from './W';

const Results = props => {
  const result = props.result;
  if (result === 'Coolidge') {
    return (<Coolidge />);
  }
  if (result === 'Ford') {
    return (<Ford />);
  }
  if (result === 'Hw') {
    return (<Hw />);
  }
  if (result === 'Ike') {
    return (<Ike />);
  }
  if (result === 'Lincoln') {
    return (<Lincoln />);
  }
  if (result === 'Reagan') {
    return (<Reagan />);
  }
  if (result === 'Teddy') {
    return (<Teddy />);
  }
  if (result === 'W') {
    return (<W />);
  }
};

export default Results;
