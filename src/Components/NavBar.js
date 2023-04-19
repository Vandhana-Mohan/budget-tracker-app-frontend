import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <ul className="flex justify-around">
        <Link to="/budgets">
          <li className="cursor-pointer hover:text-gray-300">
            View All Transactions
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
        <li className="cursor-pointer hover:text-gray-300">Feedback</li>
        <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
      </ul>
    </nav>
  );
}
export default NavBar;
