/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
