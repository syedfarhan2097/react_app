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

//  const [count, setCount] = useState(0);
const [title, newTitle] = useState(props.Name);
const clickHandle = ()=>{
  newTitle('Updated');
  console.log(title);
}


  return (
    <Card className="expense-item">
      <ExpenseDate dateNewCmpt={props.Date}></ExpenseDate>
      <h2>{title}</h2>
      <div className="expense-item__discription">
        <div className="expense-item__price">${props.Amount}</div>
      </div>
      <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <button onClick={clickHandle}>
      click
      </button>
    </div>
    </Card>
  );
};
export default ExpenseItems;
