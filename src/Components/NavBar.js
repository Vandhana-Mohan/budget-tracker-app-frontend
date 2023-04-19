import { Link } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <ul className="flex justify-around">
        <Link to="/budgets">
          <li className="cursor-pointer hover:text-gray-300">
            View All Transactions
          </li>
        </Link>
        <Link to="/budgets">
          <li className="cursor-pointer hover:text-gray-300">
            Total Balance: {props.totalBalance}
          </li>
        </Link>
        <Link to="/budgets/new">
          <li className="cursor-pointer hover:text-gray-300">
            New Transaction
          </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer hover:text-gray-300">About Us</li>
        </Link>
      </ul>
    </nav>
  );
}
export default NavBar;
