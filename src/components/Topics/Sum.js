import React, { Component } from 'react';

export default class Sum extends Component{
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: val })
  }

  updateNumber2(val) {
    this.setState({ number2: val })
  }

  add(num1, num2) {
    let num = num1 + num2
    console.log(num, num1, num2)
    this.setState({ sum: num })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(parseInt(e.target.value, 10)) } />
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(parseInt(e.target.value, 10)) } />
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum}</span>
      </div>
    )
  }
}