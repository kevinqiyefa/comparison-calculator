import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import logo from '../../assets/logo_utensils.svg';
import './style.css';

class ComparisonResults extends Component {
  state = {
    protein: 0,
    fat: 0,
    carbohydrat: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const formData = nextProps.formData;

    let p = Math.round((formData.protein + 1.5) / (formData.caloric / 10000));
    let f = Math.round((formData.fat + 1) / (formData.caloric / 10000));
    let c = Math.round((1000 - p * 3.5 - f * 8.5) / 3.5);
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
      <Aux>
        <h3 className="brand">{brand}</h3>
        <label className="label">Protein</label>
        <h1>{this.state.protein}</h1>
        <label className="label">Fat</label>
        <h1>{this.state.fat}</h1>
        <label className="label">Carbohydrate</label>
        <h1>{this.state.carbohydrat}</h1>
      </Aux>
    );

    let nomnomnow = (
      <Aux>
        <img className="small-logo-icon" src={logo} alt="logo" />
        <h3 className="brand">{nnn}</h3>
        <label className="label">Protein *</label>
        <h1 className="color-orange">{nnnFoodData.protein}</h1>
        <label className="label">Fat</label>
        <h1 className="color-teal">{nnnFoodData.fat}</h1>
        <label className="label">Carbohydrate</label>
        <h1 className="color-yellow">{nnnFoodData.carbohydrate}</h1>
      </Aux>
    );

    return (
      <div className="result-container ">
        <div className="results padding-bottom">
          <div>{otherBrand}</div>
          <div>{nomnomnow}</div>
        </div>
        <div className="padding-bottom">
          Learn about{' '}
          <a href="https://www.nomnomnow.com/learn/pet-expert/understanding-dog-food-nutrients">
            the role of protein, fat, and carbs
          </a>{' '}
          in a dog's diet.
        </div>
        <div className="text-smallest">
          * All units above are given in grams per 1000 calories (g/kcal).
        </div>
      </div>
    );
  }
}

export default ComparisonResults;
