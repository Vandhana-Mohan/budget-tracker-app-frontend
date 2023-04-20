import { useState, useEffect } from "react";

function TotalAmount() {
  const [totalBalance, setTotalBalance] = useState([]);
  let total = 0,
    deposit = 0,
    withdrawal = 0;
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
      deposit += parseInt(bal.amount);
    } else {
      total -= parseInt(bal.amount);
      withdrawal -= parseInt(bal.amount);
    }
  });

  const formatBalance = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatDeposit = deposit.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatWithdrawal = withdrawal.toLocaleString("en-US", {
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
    <div className="flex items-center">
      <h1
        className="flex-1 text-2xl font-bold mb-2 whitespace-nowrap"
        style={totalColor}
      >
        Total Balance: {formatBalance}
      </h1>

      <h1 className="flex-1 text-lg font-bold whitespace-nowrap mb-2 ml-4">
        Total Deposits: {formatDeposit}
      </h1>

      <h1 className="flex-1 text-lg font-bold whitespace-nowrap mb-2 ml-4">
        Total Withdrawals: {formatWithdrawal}
      </h1>
    </div>
  );
}

export default TotalAmount;
