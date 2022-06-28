import React, { Component } from 'react';
/* eslint-disable */ 
class CalculatorUi extends Component {
  render() {
    return (
      <div className="calculator-buttons">
      
          <button type="button" className="btn btn-gray"> AC</button>
          <button type="button" className="btn btn-gray"> +/-</button>
          <button type="button" className="btn btn-gray">% </button>
          <button type="button" className="btn btn-orange">&divide; </button>


          <button type="button" className="btn btn-gray"> 7</button>
          <button type="button" className="btn btn-gray"> 8</button>
          <button type="button" className="btn btn-gray">9</button>
          <button type="button" className="btn btn-orange">x</button>
 
       
          <button type="button" className="btn btn-gray"> 4</button>
          <button type="button" className="btn btn-gray">5</button>
          <button type="button" className="btn btn-gray">6 </button>
          <button type="button" className="btn btn-orange">-</button>
  
       
          <button type="button" className="btn btn-gray"> 1</button>
          <button type="button" className="btn btn-gray"> 2</button>
          <button type="button" className="btn btn-gray">3 </button>
          <button type="button" className="btn btn-orange">+ </button>
     
          <button type="button" className=" btn-gray span-2"> 0</button>
          <button type="button" className=" btn-gray btn"> .</button>
          <button type="button" className=" btn-orange btn ">= </button>
   

      </div>
    );
  }
}
export default CalculatorUi;
