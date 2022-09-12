import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import Card from "./Card";
const  Expense=(props)=>{
    return(
        <Card className="expenses">
                  {props.items.map((item)=>
        <ExpenseItems Date={item.date} Name={item.title} Amount = {item.amount}></ExpenseItems>
      )}
      {/* <ExpenseItems Date={props.items[0].date} Name={props.items[0].title} Amount = {props.items[0].amount}></ExpenseItems>
      <ExpenseItems Date={props.items[1].date} Name={props.items[1].title} Amount = {props.items[1].amount}></ExpenseItems>
      <ExpenseItems Date={props.items[2].date} Name={props.items[2].title} Amount = {props.items[2].amount}></ExpenseItems>
      <ExpenseItems Date={props.items[3].date} Name={props.items[3].title} Amount = {props.items[3].amount}></ExpenseItems>  */}
        </Card>
    );
}

export default Expense;