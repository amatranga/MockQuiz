import React from 'React';

const Lincoln = () => {
  return (
    <div className="row col jumbotron jumboton-fluid">
      <div className="container">
        <div className="row">

          <div className="col-8">
            <h1>Abraham Lincoln</h1>
            <p>Abraham Lincoln was an American statesman and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865.</p>
          </div>
          
          <div className="col-4">
            <img src="/assets/presidents/lincoln.jpg" alt="Abraham Lincoln"></img>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Lincoln;
