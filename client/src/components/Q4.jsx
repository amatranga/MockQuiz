import React from 'react';

class Q4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleClick(e) {
    this.handleSelection(e.target.id);
  }

  handleSelection(item) {
    const selected = this.state.selected;
    if (item) {
      if (selected.length === 2) {
        selected.shift();
      }
      selected.push(item);
      this.setState(selected);
    }
    return this.props.handleSelect('Q4Answer', selected);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>4 Choose two articles of clothing</h1>
        </div>

        <div className="col-12">
          <div className="form-check form-check-inline" style={{'align': 'center'}}>
            <label onClick={this.handleClick} htmlFor="Cowboy boots" className="form-check-label"><img src="/assets/clothing/1.jpg" alt="Cowboy boots"></img>Cowboy boots</label>
            <input onClick={this.handleClick} className="form-check-input" type="checkbox" id="Cowboy boots" />
          </div>

          <div className="form-check form-check-inline" onClick={this.handleClick} style={{'align': 'center'}}>
            <label htmlFor="Top Hat" className="form-check-label"><img src="/assets/clothing/2.jpg" alt="Top Hat"></img>Top Hat</label>
            <input className="form-check-input" type="checkbox" id="Top Hat" />
          </div>

          <div className="form-check form-check-inline" onClick={this.handleClick} style={{'align': 'center'}}>
            <label htmlFor="Socks" className="form-check-label"><img src="/assets/clothing/3.jpg" alt="Socks"></img>Socks</label>
            <input className="form-check-input" type="checkbox" id="Socks" />
          </div>

          <div className="form-check form-check-inline" onClick={this.handleClick} style={{'align': 'center'}}>
            <label htmlFor="Bowtie" className="form-check-label"><img src="/assets/clothing/4.jpg" alt="Bowtie"></img>Bowtie</label>
            <input className="form-check-input" type="checkbox" id="Bowtie" />
          </div>
        </div>
      </div>
    );
  }
}

export default Q4;
