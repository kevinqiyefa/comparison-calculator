import React, { Component } from 'react';
import logo from '../../assets/logo_utensils.svg';

class ComparisonResults extends Component {
  state = {
    protein: 0,
    fat: 0,
    carbohydrat: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const formData = nextProps.formData;

    let p = (formData.protein + 1.5) / (formData.caloric / 10000);
    let f = (formData.fat + 1) / (formData.caloric / 10000);
    let c = (1000 - p * 3.5 - f * 8.5) / 3.5;
    c = c < 0 ? 0 : c;

    if (
      p !== prevState.protein ||
      f !== prevState.fat ||
      c !== prevState.carbohydrat
    ) {
      return {
        protein: p,
        fat: f,
        carbohydrat: c
      };
    }

    return null;
  }

  nomnomnowData(nnn) {
    const HBM = { protein: 80, fat: 62, carbohydrate: 55 };
    const PP = { protein: 78, fat: 63, carbohydrate: 56 };
    const CCW = { protein: 115, fat: 58, carbohydrate: 31 };
    const TTF = { protein: 96, fat: 46, carbohydrate: 78 };

    switch (nnn) {
      case 'Porkalicious Potluck':
        return PP;
      case 'Chicken Chow-Wow':
        return CCW;
      case 'Tasty Turkey Fare':
        return TTF;
      default:
        return HBM;
    }
  }

  render() {
    const { brand, nnn } = this.props.formData;
    const nnnFoodData = this.nomnomnowData(nnn);

    let otherBrand = (
      <div>
        <h3>{brand}</h3>
        <label>Protein</label>
        <h1>{this.state.protein}</h1>
        <label>Fat</label>
        <h1>{this.state.fat}</h1>
        <label>Carbohydrate</label>
        <h1>{this.state.carbohydrat}</h1>
      </div>
    );

    let nomnomnow = (
      <div>
        <img src={logo} alt="logo" />
        <h3>{nnn}</h3>
        <label>Protein *</label>
        <h1>{nnnFoodData.protein}</h1>
        <label>Fat</label>
        <h1>{nnnFoodData.fat}</h1>
        <label>Carbohydrate</label>
        <h1>{nnnFoodData.carbohydrate}</h1>
      </div>
    );

    return (
      <div>
        <div>{otherBrand}</div>
        <div>{nomnomnow}</div>
        <h5>
          Learn about the role of protein, fat, and carbs in a dog's diet.
        </h5>
        <h5>
          * All units above are given in grams per 1000 calories (g/kcal).
        </h5>
      </div>
    );
  }
}

export default ComparisonResults;
