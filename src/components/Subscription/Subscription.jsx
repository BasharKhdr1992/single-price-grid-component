import React from "react";
import Button from "../Button/Button";
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <h3 className="sub-title">Monthly Subscription</h3>
      <p className="price-section">
        <span className="price">$29</span>&nbsp;
        <span className="per">per month</span>
      </p>
      <p className="price-desc">Full access for less than $1 a day</p>
      <Button />
    </div>
  );
};

export default Subscription;
