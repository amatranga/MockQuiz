import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from './Navbar';
import QuizOrResult from './QuizOrResult';
import ShareButton from './ShareButton';

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <ShareButton />
      <Router>
        <Switch>
          <Route path="*" component={QuizOrResult} />
        </Switch>
      </Router>
      <ShareButton />
    </div>
  );
};

export default App;
