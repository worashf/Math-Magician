import React from 'react';
import AnswerScreen from './AnswerScreen';
import CalculatorUi from './CalculatorUi';

/* eslint-disable */ 
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <AnswerScreen />
        <CalculatorUi />
      </div>
    );
  }
}
export default Calculator;
