import React from 'React';

import FacebookButton from './FacebookButton';
import TwitterButton from './TwitterButton';

const ShareButton = () => {
  return (
    <div className="row">
      <FacebookButton />
      <TwitterButton />
    </div>
  );
};

export default ShareButton;
