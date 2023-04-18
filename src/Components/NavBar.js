function NavBar() {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300">
          View All Transactions
        </li>
        <li className="cursor-pointer hover:text-gray-300">New Transaction</li>
        <li className="cursor-pointer hover:text-gray-300">Edit Transaction</li>
        <li className="cursor-pointer hover:text-gray-300">
          Delete Transaction
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
