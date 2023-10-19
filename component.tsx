import * as React from "react";
import "./style.css";

const TodaysDate = ({ name }) => {
  return (
    <>
      <div>{`Today's date is ${Date()}`}</div>
      <div className="abhi">{name}</div>
    </>
  );
};
export default TodaysDate;
