import React from 'react';
import FoodListData from './foodlistdata';
import './Foodlist.css';

export default function Foodlist() {
  const foods = FoodListData();

  return (
    <div className="food-list-container">
      {foods.map((food) => (
        <div key={food.id} className="food-card">
          <img src={food.img} alt={food.title} className="food-card-img" />
          <div className="food-card-content">
            <h3 className="food-card-title">{food.title}</h3>
            <p className="food-card-paragraph">{food.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}