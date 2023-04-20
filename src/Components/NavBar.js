import { Link } from "react-router-dom";
import TotalAmount from "./TotalAmount";

function NavBar(props) {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/budgets">View All Transactions</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/budgets">
            {" "}
            <TotalAmount totalBalance={props.totalBalance} />{" "}
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/budgets/new">Add New Transaction</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/about"> About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
