/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [EnterdTitle, SetEnterdTitle] = useState("");
  const [EnterdAmount, SetEnterdAmount] = useState("");
  const [EnterdDate, SetEnterdDate] = useState("");

  const TitleChangeHandler = (e) => {
    SetEnterdTitle(e.target.value);
  };
  const AmountChangeHandler = (e) => {
    SetEnterdAmount(e.target.value);
  };
  const DateChangeHandler = (e) => {
    SetEnterdDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: EnterdTitle,
      amount: EnterdAmount,
      date: new Date(EnterdDate),
    };

    props.SaveExpenseData(expenseData);

    SetEnterdAmount("");
    SetEnterdDate("");
    SetEnterdTitle("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="Top">
          <h2>Daily Expense Tracker</h2>
        </div>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>title</label>
            <input
              type="text"
              value={EnterdTitle}
              onChange={TitleChangeHandler}
              placeholder="Enter Title"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={EnterdAmount}
              onChange={AmountChangeHandler}
              placeholder="Enter Amount"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={EnterdDate}
              onChange={DateChangeHandler}
              placeholder="Select Date"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
