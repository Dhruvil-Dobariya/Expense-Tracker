/* eslint-disable react/prop-types */
import "../Styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.floor(Math.random() * 10),
      // id: Math.random().toString,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm SaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
