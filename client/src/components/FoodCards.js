import React from 'react';

const FoodCards = props => {
  return (
    <div class="ui link cards">
    {props.food.map(item => {
      return ( 
      <div class="card">
      <div class="content"> 
      <div class="header">{item.name}</div>
      <div>{item.course}</div>
      <div>{item.technique}</div>
      <div>{item.ingredients}</div>
     </div>
      </div>
      )})}
      </div>
  );
};

export default FoodCards;