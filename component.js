"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./style.css");
var TodaysDate = function (_a) {
    var name = _a.name;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, "Today's date is ".concat(Date())),
        React.createElement("div", { className: "abhi" }, name)));
};
exports.default = TodaysDate;
