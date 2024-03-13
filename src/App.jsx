import NewExpense from "./Components/NewExpense";
import Expenses from "./Components/Expenses";
import { useState } from "react";

let DUMMY_EXPENSE = [
  // {
  //   id: "e1",
  //   title: "School",
  //   amount: 300,
  //   date: new Date(2024, 3, 20),
  // },
  // {
  //   id: "e2",
  //   title: "Car Maintenance",
  //   amount: 400,
  //   date: new Date(2024, 3, 25),
  // },
  // {
  //   id: "e3",
  //   title: "Food",
  //   amount: 150,
  //   date: new Date(2024, 4, 5),
  // },
  // {
  //   id: "e4",
  //   title: "House Rent",
  //   amount: 100,
  //   date: new Date(2024, 4, 10),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
