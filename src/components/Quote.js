import React from 'react';
import Header from './Header';
/* eslint-disable*/

const Quote = () => {
  return (
    <div>
      <Header />
      <div className="quotes">
        <p className="quote1">
          I hate math. Its hard, its stupid, and its natures way of separating
          spinsters from women who end up breeding. — Douglas Coupland
        </p>
        <p className="text">
          Science attempts to find logic and simplicity in nature. Mathematics
          attempts to establish order and simplicity in human thought. — Edward
          Teller
        </p>
      </div>
    </div>
  );
};

export default Quote;
