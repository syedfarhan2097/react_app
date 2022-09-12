import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
const ExpenseItems=(props)=> {
    // let expenseDate= new Date(2022, 7, 31);
    // let expenseName= 'Car Insurance';
    // let expenseAmount = 251;
    // const {
    //   Name, Amount
    // }=props

  return (
    <div className="expense-item">
      <ExpenseDate dateNewCmpt={props.Date}></ExpenseDate>
      <h2>{props.Name}</h2>
      <div className="expense-item__discription">
        <div className="expense-item__price">${props.Amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItems;