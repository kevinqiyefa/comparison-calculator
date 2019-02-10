import React, { Component } from 'react';
import './style.css';

class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      nnn: 'Heartland Beef Mash',
      protein: 0,
      fat: 0,
      caloric: 0
    };

    this.handleChangeBrand = this.handleChangeBrand.bind(this);
    this.handleChangeNNN = this.handleChangeNNN.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      if (
        this.state.brand &&
        this.state.protein &&
        this.state.fat &&
        this.state.caloric
      ) {
        this.props.completedForm(true);
        this.props.comparisonInfo(this.state);
      } else {
        this.props.completedForm(false);
      }
    }
  }

  handleChangeBrand(evt) {
    this.setState({
      brand: evt.target.value
    });
  }
  handleChangeNNN(evt) {
    this.setState({
      nnn: evt.target.value
    });
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: +evt.target.value
    });
  }

  render() {
    let infoText = this.state.brand ? (
      <div className="padding-bottom-small">
        <b>{this.state.brand}</b>'s nutrient info:
      </div>
    ) : (
      <div className="padding-bottom-small">
        Dog food brand's nutrient info:
      </div>
    );

    return (
      <form className="calculator-form">
        <div className="food-brand padding-bottom-small">
          <div className="other-food-brands padding-bottom-small">
            <label className="label">Name of dog food brand</label>
            <select value={this.state.brand} onChange={this.handleChangeBrand}>
              <option value="">- Select a Brand -</option>
              <option value="Bonio">Bonio</option>
              <option value="Milk-Bone">Milk-Bone</option>
              <option value="Friskies">Friskies</option>
            </select>
          </div>

          <div className="nnn-food-brand padding-bottom-small">
            <label className="label">Compare with NomNomNow</label>
            <select value={this.state.nnn} onChange={this.handleChangeNNN}>
              <option value="Porkalicious Potluck">Porkalicious Potluck</option>
              <option defaultValue="Heartland Beef Mash">
                Heartland Beef Mash
              </option>
              <option value="Chicken Chow-Wow">Chicken Chow-Wow</option>
              <option value="Tasty Turkey Fare">Tasty Turkey Fare</option>
            </select>
          </div>
        </div>

        {infoText}

        <div className="inputs">
          <div className="padding-bottom-small padding-right-small">
            <label className="label">% protein (min.)</label>
            <input
              type="number"
              name="protein"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="padding-bottom-small padding-right-small">
            <label className="label">% fat (min.)</label>
            <input type="number" name="fat" onChange={this.handleInputChange} />
          </div>

          <div className="padding-bottom-small">
            <label className="label">Caloric density (kcal/kg)</label>
            <input
              type="number"
              name="caloric"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default CalculatorForm;
