function NavBar() {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300">
          View All Transactions
        </li>
        <li className="cursor-pointer hover:text-gray-300">New Transaction</li>
        <li className="cursor-pointer hover:text-gray-300">About Us</li>
        <li className="cursor-pointer hover:text-gray-300">Feedback</li>
        <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
      </ul>
    </nav>
  );
}
export default NavBar;
