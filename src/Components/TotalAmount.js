import { useState, useEffect } from "react";

function TotalAmount() {
  const [totalBalance, setTotalBalance] = useState([]);
  let total = 0;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets`)
      .then((res) => res.json())
      .then((data) => {
        setTotalBalance(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  totalBalance.forEach((bal) => {
    if (!bal.isWithdrawal) {
      total += parseInt(bal.amount);
    } else {
      total -= parseInt(bal.amount);
    }
  });

  const formatBalance = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Calculate the total amount color based on the total amount
  let totalColor;
  if (total > 100) {
    totalColor = { color: "green" };
  } else if (total >= 0 && total <= 100) {
    totalColor = { color: "yellow" };
  } else if (total < 0) {
    totalColor = { color: "red" };
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4" style={totalColor}>
        {" "}
        Total Balance: {formatBalance}
      </h1>
    </div>
  );
}

export default TotalAmount;
