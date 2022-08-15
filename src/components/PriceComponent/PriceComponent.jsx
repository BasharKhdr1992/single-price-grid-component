import React from "react";
import Header from "../Header/Header";
import Subscription from "../Subscription/Subscription";
import Whyus from "../Whyus/Whyus";
import "./PriceComponent.css";

const PriceComponent = () => {
  return (
    <div className="price-component">
      <Header />
      <section className="price-component-main">
        <Subscription />
        <Whyus />
      </section>
    </div>
  );
};

export default PriceComponent;
