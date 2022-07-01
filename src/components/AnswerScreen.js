import React from 'react';
import PropTypes from 'prop-types';

const AnswerScreen = ({ next = null, total = null, operation = null }) => (
  <div className="answer-screen">
    <input placeholder={next || operation || total || '0'} className="answer" />

  </div>
);

AnswerScreen.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default AnswerScreen;
