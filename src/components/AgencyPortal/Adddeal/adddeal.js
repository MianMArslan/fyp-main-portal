import React from "react";
import "./adddeal.css";

export default function NewDeals() {
  return (
    <div className="newDeal">
      <h1 className="addDealsTitle">New Deals</h1>
      <form className="addDealsForm">
        <div className="addDealsItem">
          <label>Destination Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addDealsItem">
          <label> Destination Name</label>
          <input type="text" placeholder="Name of your Destination" />
        </div>
        <div className="addDealsItem">
          <label>Brief Description </label>
          <input type="text" placeholder="Brief description abount your destination" />
        </div>
        <div className="addDealsItem">
          <label>Actual Amount</label>
          <input type="text" placeholder="Enter the Actual amount" />
        </div>
        <div className="addDealsItem">
          <label>Discount Amount</label>
          <input type="text" placeholder="Enter the discount amount" />
        </div>
        <button className="addDealsButton">Create</button>
      </form>
    </div>
  );
}