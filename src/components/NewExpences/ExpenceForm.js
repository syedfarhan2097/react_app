import React, { useState } from "react";
import "./ExpenceForm.css";
function ExpenceForm() {
    const [expenceTitle, setExpenceTitle] =useState();
    const [expenceAmount, setExpenceAmount] =useState();
    const [expenceDate, setExpenceDate] =useState();
    const changeTitleHandler = (evnt)=>{
        setExpenceTitle(evnt.target.value);
    };
    const changeAmountHandler = (evnt)=>{
        setExpenceAmount(evnt.target.value);
    };
    const changeDateHandler = (evnt)=>{
        setExpenceDate(evnt.target.value);
    };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={changeAmountHandler}  />
        </div>
        <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" step="2022-12-31" onChange={changeDateHandler}  />
    </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenceForm;
