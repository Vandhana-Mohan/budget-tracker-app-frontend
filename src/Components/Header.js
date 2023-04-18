import Budget from "../Images/Budget_logo.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center m-1 p-4">
      <Link to="/">
        <img src={Budget} alt="logo" className="w-20 h-20" />
      </Link>
      <Link to="/">
        <h1 className="m-6 text-4xl font-bold">
          Budget Master
        </h1>
      </Link>
    </header>
  );
}

export default Header;
