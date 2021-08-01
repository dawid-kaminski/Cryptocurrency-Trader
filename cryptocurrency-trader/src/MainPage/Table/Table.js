import React from "react";
import MainPageItem from "../MainPageItem/MainPageItem";
import "./Table.css";

function Table(props) {
  return (
    <div className="Table">
      {props.items.map((offer, i) => (
        <MainPageItem course={offer.ra} amount={offer.ca} offers={offer.co} />
      ))}
    </div>
  );
}

export default Table;
