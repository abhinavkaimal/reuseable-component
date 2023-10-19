import * as React from "react";
import "./style.css";

export const createID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const test = () => {
  return <div className="name">name </div>;
};

export const foodrecipe = (props) => {
  return (
    <div className="recipe">
      <h1>Healthy Main Dish Recipes - {props.name}</h1>
    </div>
  );
};

export { default as TodaysDate } from './component';