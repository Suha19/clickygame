import React from "react";


function card() {
  return (
<div classname ="container">
   <div className="row ">
        <div className= "col">
          <div className="card">
            <div className="card-body">
            <button id="click">
            <img src="http://placehold.it/150x150" alt="Placeholder" ></img>
            </button>
            </div>
          </div>  
        </div>
          <div className="col ">
          <div className="card">
            <div className="card-body">
            <button id="click">
            <img src="http://placehold.it/150x150" alt="Placeholder" ></img>
            </button>
            </div>
          </div>
          </div>

          <div className="col ">
          <div className="card">
            <div className="card-body">
            <button id="click">
            <img src="http://placehold.it/150x150" alt="Placeholder" ></img>
            </button>
            </div>
          </div>
        </div> 
  </div>
 </div>
  );
}

export default card;
