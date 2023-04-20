import Budget from "../Images/Budget_logo.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex m-1 p-4 bg-green-100 sm:px-6 lg:px-8">
      <Link to="/" className="max-w-3xl mx-auto">
        <img src={Budget} alt="logo" className="w-20 h-20" />
        <h1 className="m-6 text-4xl font-bold text-orange-600 sm:text-lg lg:text-xl sm:mt-8 lg:mt-10">
          Budget Master
        </h1>
      </Link>
      <h2 className="text-gray-700 text-xl italic font-bold mt-2 sm:text-lg lg:text-xl sm:mt-8 lg:mt-10">
        <span className="relative z-10 inline-block px-3 py-1">
          “You don’t have to see the whole staircase, just take the first step.”
          – Martin Luther King, Jr.
        </span>
      </h2>
    </header>
  );
}

export default Header;
