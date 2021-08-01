import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import "./MainPage.css";

function MainPage() {
  const [currency, setCurrency] = useState("BTC-PLN");
  const [orderBook, setOrderBook] = useState();

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const fetchOrderBook = () => {
    fetch(
      `https://api.bitbay.net/rest/trading/orderbook-limited/${currency}/10`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "Fail") {
          alert("Chosen cryptocurrency is unavailable.");
        } else {
          setOrderBook(response);
        }
      });
  };

  useEffect(() => {
    fetchOrderBook();
    const interval = setInterval(() => {
      fetchOrderBook();
    }, 1000);
    return () => clearInterval(interval);
  }, [currency]);

  return (
    <div className="main-page__container">
      <div className="main-page__select-container">
        <div className="main-page__select">
          <select onChange={handleCurrencyChange}>
            <option>BTC-PLN</option>
            <option>ETH-PLN</option>
            <option>XRP-PLN</option>
          </select>
          <div className="main-page__description-container">
            <div className="main-page__description">
              The tables below show highest purchase and lowest sales offers.
            </div>
          </div>
        </div>
      </div>
      <div className="main-page__currency-tables-container">
        <div className="main-page__currency-table-sales">
          <div className="main-page__currency-table-title">Buy</div>
          <div className="main-page__currency-table-details">
            <div className="main-page__currency-table-rate">Rate</div>
            <div className="main-page__currency-table-amount">amount</div>
            <div className="main-page__currency-table-price">price</div>
            <div className="main-page__currency-table-offers">offers</div>
          </div>
          <div className="main-page__currency-table-display">
            <Table items={orderBook ? orderBook.buy : []} />
          </div>
        </div>
        <div className="main-page__currency-table-sales">
          <div className="main-page__currency-table-title">Sell</div>
          <div className="main-page__currency-table-details">
            <div className="main-page__currency-table-rate">Rate</div>
            <div className="main-page__currency-table-amount">amount</div>
            <div className="main-page__currency-table-price">price</div>
            <div className="main-page__currency-table-offers">offers</div>
          </div>
          <div className="main-page__currency-table-display">
            <Table items={orderBook ? orderBook.sell : []} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
