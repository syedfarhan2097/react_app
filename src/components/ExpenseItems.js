import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "./Card";
import React, { useState } from 'react';
const ExpenseItems = (props) => {
  // let expenseDate= new Date(2022, 7, 31);
  // let expenseName= 'Car Insurance';
  // let expenseAmount = 251;
  // const {
  //   Name, Amount
  // }=props

 const [count, setCount] = useState(0);
//  const [count2, setCount2] = useState();

  return (
    <Card className="expense-item">
      <ExpenseDate dateNewCmpt={props.Date}></ExpenseDate>
      <h2>{props.Name}</h2>
      <div className="expense-item__discription">
        <div className="expense-item__price">${props.Amount}</div>
      </div>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </Card>
  );
};
export default ExpenseItems;
