import React, { Component } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ComparisonResults from './components/ComparisonResults';
import './App.css';

class App extends Component {
  state = {
    isFilled: false
  };

  completedForm = isCompleted => {
    this.setState({
      isFilled: isCompleted
    });
  };

  render() {
    let confirmedCompletedMsg = !this.state.isFilled ? (
      <div>
        <div>
          <i className="fas fa-chevron-up" />
        </div>
        Fill out the form to get a nutrient comparison
      </div>
    ) : (
      <div>
        See the the nutrient comparison below
        <div>
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    );

    let comparisonResults = this.state.isFilled ? <ComparisonResults /> : null;
    return (
      <div className="App">
        <CalculatorForm completedForm={this.completedForm} />
        {confirmedCompletedMsg}
        {comparisonResults}
      </div>
    );
  }
}

export default App;
