import React from 'react';
import calculate from './logic/calculate';
import AnswerScreen from './AnswerScreen';
/* eslint-disable */ 
class Calculator extends React.Component {

  constructor(props){
    super(props)
    this.state={ total: null,
      next: null,
      operation: null }
    this.handleClick = this.handleClick.bind(this)

  }






  handleClick =(btnValue)=>{
    const result=calculate(this.state,btnValue);
    this.setState(result)

  }
  

  render() {

const {next,total,operation} =this.state;

    return (
       

      <div className="container">
         <AnswerScreen next={next} operation={operation} total={total}/>
      <div className="calculator-buttons">
      
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('AC')}> AC</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('+/-')}> +/-</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('%')}>% </button>
      <button type="button" className="btn btn-orange" onClick={()=>this.handleClick('÷')}>&divide; </button>


      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('7')}> 7</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('8')}> 8</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('9')}>9</button>
      <button type="button" className="btn btn-orange" onClick={()=>this.handleClick('x')}>x</button>

   
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('4')}> 4</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('5')}>5</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('6')}>6 </button>
      <button type="button" className="btn btn-orange" onClick={()=>this.handleClick('-')}>-</button>

   
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('1')}> 1</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('2')}> 2</button>
      <button type="button" className="btn btn-gray" onClick={()=>this.handleClick('3')}>3 </button>
      <button type="button" className="btn btn-orange" onClick={()=>this.handleClick('+')}>+ </button>
 
      <button type="button" className=" btn-gray span-2" onClick={()=>this.handleClick('0')}> 0</button>
      <button type="button" className=" btn-gray btn" onClick={()=>this.handleClick('.')}> .</button>
      <button type="button" className=" btn-orange btn " onClick={()=>this.handleClick('=')}>= </button>


  </div>

      </div>
    );
  }
}
export default Calculator;
