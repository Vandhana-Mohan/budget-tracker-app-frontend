import { Link } from "react-router-dom";
import TotalAmount from "./TotalAmount";

function NavBar(props) {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300">
          <Link
            to="/budgets"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            View All Transactions
          </Link>
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          <TotalAmount totalBalance={props.totalBalance} />{" "}
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          <Link
            to="/budgets/new"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Add New Transaction
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
