/*eslint-disable */
import React, { Component } from 'react';

class AnswerScreen extends Component {
    constructor(props){
        super(props)

    }
  render() {
    return (
      <div className="answer-screen">
        <input placeholder=  {this.props.next || this.props.operation || this.props.total || '0'} className="answer" /> 
   


      </div>
    );
  }
}
export default AnswerScreen;