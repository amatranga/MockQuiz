import React from 'react';
import { Redirect } from 'react-router-dom';

import Quiz from './Quiz';
import Results from './Results';

class QuizOrResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q1Answer: undefined,
      q2Answer: undefined,
      q3Answer: undefined,
      q4Answer: undefined,
      result: undefined,
    },

    this.canRedirect = this.canRedirect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  canRedirect() {
    const state = this.state;
    if (state.q1Answer !== undefined && state.q2Answer !== undefined && state.q3Answer !== undefined && state.q4Answer !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  handleSelect(question, selection) {
    if (this.state.canSelect === true) {
      this.setState({question: selection});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return (
      <Redirect to="/result" />
    );
  }

  render() {
    const path = this.props.location.pathname;
    if (path === '/') {
      return (
        <React.Fragment>
          <Quiz handleSelect={this.handleSelect} />
          <button className="btn btn-submit" onClick={this.handleSubmit} >Submit</button>
        </React.Fragment>
      );
    }
    if (path === '/result') {
      return (
        <Results result={this.state.result} />
      );
    } else {
      return (
        <Redirect to='/' />
      );
    }
  }

  componentDidUpdate() {
    console.log(this.state, 'state in QuizOrResult');
  }
}


export default QuizOrResults;
