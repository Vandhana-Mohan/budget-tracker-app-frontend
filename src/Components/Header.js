import Budget from "../Images/Budget_logo.jpeg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/">
        {" "}
        <img src={Budget} alt="logo" />{" "}
      </Link>
      <h1>Budget Master</h1>
    </header>
  );
}

export default Header;
