import { useState, useEffect } from "react";
import Budget from "./Budget";

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets`)
      .then((response) => response.json())
      .then((data) => {
        setBudgets(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From</th>
            <th>Category</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Budgets;
