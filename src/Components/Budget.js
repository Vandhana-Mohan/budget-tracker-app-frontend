import { Link } from "react-router-dom";

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, "0"); - this is to change month in number
  const day = String(date.getDate()).padStart(2, "0");
  const monthName = date.toLocaleString("default", { month: "long" });
  // return `${month}-${day}-${year}`; // returns "05-05-2023"
  return `${monthName} ${day}, ${year}`; // returns "May 05, 2023"
}

function Budget({ budget, index }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="w-1/12 px-4 py-3">{budget.id}</td>
      <td className="w-1/12 px-4 py-3">
        <Link
          to={`/budgets/${index}`}
          className="text-blue-600 hover:underline"
        >
          {budget.item_name}
        </Link>
      </td>
      <td className="w-2/12 px-4 py-3">
        {!budget.isWithdrawal ? "" : "-"} $ {budget.amount}
      </td>
      <td className="w-1/12 px-4 py-3">{formatDate(budget.date)}</td>
      <td className="w-1/12 px-4 py-3">{budget.from}</td>
      <td className="w-1/12 px-4 py-3">{budget.category}</td>
    </tr>
  );
}

export default Budget;
