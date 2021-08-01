import React from "react";
import "./MainPageItem.css";

function MainPageItem(props) {
  return (
    <div className="item">
      <div className="item__course">{props.course}</div>
      <div className="item__amount">{props.amount}</div>
      <div className="item__value">{props.course * props.amount}</div>
      <div className="item__offers">{props.offers}</div>
    </div>
  );
}

export default MainPageItem;
