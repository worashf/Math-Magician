import React, { Component } from 'react';
/* eslint-disable */ 
class CalculatorUi extends Component {
  render() {
    return (
      <div className="calculator-buttons">
        <div className="row">
          <button type="button" className="btn btn-gray"> AC</button>
          <button type="button" className="btn btn-gray"> +/-</button>
          <button type="button" className="btn btn-gray">% </button>
          <button type="button" className="btn btn-orange">/ </button>

        </div>
        <div className="row">
          <button type="button" className="btn btn-gray"> 7</button>
          <button type="button" className="btn btn-gray"> 8</button>
          <button type="button" className="btn btn-gray">9</button>
          <button type="button" className="btn btn-orange">x</button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-gray"> 4</button>
          <button type="button" className="btn btn-gray">5</button>
          <button type="button" className="btn btn-gray">6 </button>
          <button type="button" className="btn btn-orange">-</button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-gray"> 1</button>
          <button type="button" className="btn btn-gray"> 2</button>
          <button type="button" className="btn btn-gray">3 </button>
          <button type="button" className="btn btn-orange">+ </button>
        </div>
        <div className="row">
          <button type="button" className=" btn-gray btn-zero"> 0</button>
          <button type="button" className=" btn-gray btn-dot"> .</button>
          <button type="button" className=" btn-orange btn-equal">= </button>
        </div>

      </div>
    );
  }
}
export default CalculatorUi;
