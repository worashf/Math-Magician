import React, { useState } from 'react';
import calculate from './logic/calculate';
import AnswerScreen from './AnswerScreen';
import Header from './Header';
/* eslint-disable*/
const Calculator = () => {
  const [calObj, setCalObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnValue) => {
    const result = calculate(calObj, btnValue);
    setCalObj(result);
  };

  const { next, total, operation } = calObj;

  const container = {
    display: 'flex',
    width: '100%',
  };
  const guide = {
    margin: '1rem',
    fontSize: '1.5rem',
    color: '#e49504',
  };
  return (
    <>
      <Header />
      <div style={container}>
        <h2 style={guide}>Lets do some math.</h2>

        <div className="app-container">
          <AnswerScreen next={next} operation={operation} total={total} />
          <div className="calculator-buttons">
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('AC')}
            >
              AC
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('+/-')}
            >
              +/-
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('%')}
            >
              %
            </button>
            <button
              type="button"
              className="btn btn-orange"
              onClick={() => handleClick('÷')}
            >
              &divide;
            </button>

            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('7')}
            >
              7
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('8')}
            >
              8
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('9')}
            >
              9
            </button>
            <button
              type="button"
              className="btn btn-orange"
              onClick={() => handleClick('x')}
            >
              x
            </button>

            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('4')}
            >
              4
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('5')}
            >
              5
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('6')}
            >
              6
            </button>
            <button
              type="button"
              className="btn btn-orange"
              onClick={() => handleClick('-')}
            >
              -
            </button>

            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('1')}
            >
              1
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('2')}
            >
              2
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => handleClick('3')}
            >
              3
            </button>
            <button
              type="button"
              className="btn btn-orange"
              onClick={() => handleClick('+')}
            >
              +
            </button>

            <button
              type="button"
              className=" btn-gray span-2"
              onClick={() => handleClick('0')}
            >
              0
            </button>
            <button
              type="button"
              className=" btn-gray btn"
              onClick={() => handleClick('.')}
            >
              .
            </button>
            <button
              type="button"
              className=" btn-orange btn "
              onClick={() => handleClick('=')}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Calculator;
