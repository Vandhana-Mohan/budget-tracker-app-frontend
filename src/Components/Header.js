import Budget from "../Images/Budget_logo.jpeg";
import { Link } from "react-router-dom";

function Header({ isDarkMode }) {
  return (
    <header
      className={"flex m-1 p-4 " + (isDarkMode ? "text-white" : "text-black")}
      style={{ backgroundColor: isDarkMode ? "#1f2937" : "#85BB65" }}
    >
      <Link to="/">
        <img src={Budget} alt="logo" className="w-20 h-20" />
      </Link>
      <Link to="/">
        <h1 className="m-6 text-4xl font-bold text-orange-600">
          Budget Master
        </h1>
      </Link>

      <blockquote className="m-6 text-xl font-bold text-right">
        “You don’t have to see the whole staircase, just take the first step.”
        <cite>- Martin Luther King, Jr.</cite>
      </blockquote>
    </header>
  );
}

export default Header;
