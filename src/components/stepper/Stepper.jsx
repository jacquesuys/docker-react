import React, { Component } from 'react';
import './Stepper.css';

class Stepper extends Component {
  constructor() {
    super();

    this.state = {
      pageNumber: 0
    }

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  prevPage() {
    let { pageNumber: pageNum } = this.state;
    const pageNumber = pageNum > 0 ? pageNum -= 1 : 0;
    this.setState({ pageNumber });
    console.log(`On page ${this.state.pageNumber}`);
  }

  nextPage() {
    let { pageNumber: pageNum } = this.state;
    const pageNumber = pageNum < 50 ? pageNum += 1 : 50;
    this.setState({ pageNumber });
    console.log(`On page ${this.state.pageNumber}`);
  }

  render() {
    return(
      <div className="stepper-container">
        <button onClick={this.prevPage}>Prev</button>
        <button onClick={this.nextPage}>Next</button>
      </div>
    );
  }
};

export default Stepper;