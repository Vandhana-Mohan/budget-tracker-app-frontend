import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-4 py-3">{budget.id}</td>
      <td className="px-4 py-3">
        <Link
          to={`/budgets/${index}`}
          className="text-blue-600 hover:underline"
        >
          {budget.item_name}
        </Link>
      </td>
      <td className="px-4 py-3">
        {!budget.isWithdrawal ? "" : "-"} {budget.amount}
      </td>
      <td className="px-4 py-3">{budget.date}</td>
      <td className="px-4 py-3">{budget.from}</td>
      <td className="px-4 py-3">{budget.category}</td>
    </tr>
  );
}

export default Budget;
