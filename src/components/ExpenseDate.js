import "./ExpenseDate.css";
function ExpenseDate(props) {
  let day = props.dateNewCmpt.toLocaleDateString("en-us", { day: "2-digit" });
  let month = props.dateNewCmpt.toLocaleDateString("en-us", { month: "long" });
  let year = props.dateNewCmpt.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year ">{year}</div>
      <div className="expense-date__day ">{day}</div>
    </div>
  );
}
export default ExpenseDate;
