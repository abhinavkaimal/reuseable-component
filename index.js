"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodaysDate = exports.foodrecipe = exports.test = exports.createID = void 0;
var React = require("react");
require("./style.css");
var createID = function () {
    return (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15));
};
exports.createID = createID;
var test = function () {
    return React.createElement("div", { className: "abhinav" }, "Abhinav ");
};
exports.test = test;
var foodrecipe = function (props) {
    return (React.createElement("div", { className: "recipe" },
        React.createElement("h1", null,
            "Healthy Main Dish Recipes - ",
            props.name)));
};
exports.foodrecipe = foodrecipe;
var component_1 = require("./component");
Object.defineProperty(exports, "TodaysDate", { enumerable: true, get: function () { return component_1.default; } });
