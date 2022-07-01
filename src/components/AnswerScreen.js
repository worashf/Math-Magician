import React from 'react';
import PropTypes from 'prop-types';

const AnswerScreen = ({ next = null, total = null, operation = null }) => (
  <div className="answer-screen">
    <input placeholder={next || operation || total || '0'} className="answer" />

  </div>
);

AnswerScreen.propTypes = {
  next: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default AnswerScreen;
