import { useState, useEffect } from "react";
import Budget from "./Budget";
import Navbar from "./NavBar";

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets`)
      .then((res) => res.json())
      .then((data) => {
        setBudgets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // let total = 0;

  // budgets.forEach((budget) => {
  //   if (budget.isWithdrawal) {
  //     total -= parseInt(budget.amount);
  //   } else {
  //     total += parseInt(budget.amount);
  //   }
  // });

  // const formattedBalance = total.toLocaleString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });

  // Calculate the total amount color based on the total amount

  // let totalColor;
  // if (total > 100) {
  //   totalColor = { color: "green" };
  // } else if (total >= 0 && total <= 100) {
  //   totalColor = { color: "yellow" };
  // } else if (total < 0) {
  //   totalColor = { color: "red" };
  // }

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ paddingBottom: "10rem" }}
    >
      <table className="table-fixed border-collapse border-gray-600 border-2 text-center">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="w-1/12 py-2">Id</th>
            <th className="w-2/12 py-2">Item Name</th>
            <th className="w-2/12 py-2">Amount</th>
            <th className="w-2/12 py-2">Date</th>
            <th className="w-2/12 py-2">From</th>
            <th className="w-2/12 py-2">Category</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {budgets.map((budget, index) => {
            return <Budget key={index} budget={budget} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Budgets;
