import React from 'react';

const Q1 = props => {
  return (
    <div className="col-12">
      <div className="row">

        <div className="col-12">
          <h1>1 Choose a snack</h1>
        </div>
        
        <div className="col-12">
          <div className="form-check form-check-inline" onClick={props.handleSelect('Q1Answer', 'Black Cherries')}>
            <input className="form-check-input" type="checkbox" id="1" />
            <label htmlFor="1" className="form-check-label"><img src="/assets/snack/1.jpg" alt="Black Cherries"></img>Black Cherries</label>
          </div>

          <div className="form-check form-check-inline" onClick={props.handleSelect('Q1Answer', 'Jelly Beans')}>
            <input className="form-check-input" type="checkbox" id="2" />
            <label htmlFor="2" className="form-check-label"><img src="/assets/snack/2.jpg" alt="Jelly Beans"></img>Jelly Beans</label>
          </div>
          
          <div className="form-check form-check-inline" onClick={props.handleSelect('Q1Answer', 'Popcorn')}>
            <input className="form-check-input" type="checkbox" id="3" />
            <label htmlFor="3" className="form-check-label"><img src="/assets/snack/3.jpg" alt="Popcorn"></img>Popcorn</label>
          </div>
          
          <div className="form-check form-check-inline" onClick={props.handleSelect('Q1Answer', 'Pigs in a Blanket')} >
            <input className="form-check-input" type="checkbox" id="4" />
            <label htmlFor="4" className="form-check-label"><img src="/assets/snack/4.jpg" alt="Pigs in a Blanket"></img>Pigs in a Blanket</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q1;
