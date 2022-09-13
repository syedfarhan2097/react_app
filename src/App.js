import Expense from "./components/Expense";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  // let expenseDate= new Date(2022, 7, 31);
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <>
    <div>test</div>
  <Expense items={expenses}></Expense>
        {/* {props.expenses.map((item)=>
        <ExpenseItems date={props.item.date} Name={props.item.title} Amount = {props.item.amount}></ExpenseItems>
      )} */}

      {/* <ExpenseItems Date={expenses[0].date} Name={expenses[0].title} Amount = {expenses[0].amount}></ExpenseItems>
      <ExpenseItems Date={expenses[1].date} Name={expenses[1].title} Amount = {expenses[1].amount}></ExpenseItems>
      <ExpenseItems Date={expenses[2].date} Name={expenses[2].title} Amount = {expenses[2].amount}></ExpenseItems>
      <ExpenseItems Date={expenses[3].date} Name={expenses[3].title} Amount = {expenses[3].amount}></ExpenseItems> */}

    </>
  );
}

export default App;
