import React from 'react';

const Q3 = props => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>3 Choose an animal</h1>
      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <span>
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q3Answer', 'Bear')} >Bear</button>
            </span>
          </div>

          <div className="col-12">
            <span>
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q3Answer', 'Bobcat')} >Bobcat</button>
            </span>
          </div>

          <div className="col-12">
            <span>
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q3Answer', 'Horse')} >Horse</button>
            </span>
          </div>

          <div className="col-12">
            <span>
              <button type="button" className="list-group-item list-group-item-action" onClick={props.handleSelect('Q3Answer', 'Dog')} >Dog</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q3;
