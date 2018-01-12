import React from 'react';

const Q2 = props => {
  return (
    <div className="col-12">
      <div className="row">

        <div className="col-12">
          <h1>2 Choose a vacation</h1>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col">
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q2Answer', 'Colorado')} >Colorado</button>
            </div>
            <div className="col">
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q2Answer', 'California')} >California</button>
            </div>
            <div className="col">
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q2Answer', 'Camp David')} >Camp David</button>
            </div>
            <div className="col">
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q2Answer', 'Mississippi')} >Mississippi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q2;
