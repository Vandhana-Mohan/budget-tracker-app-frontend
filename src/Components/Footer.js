import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav className="bg-gray-700 text-white py-4 fixed bottom-0 w-full">
        <ul className="flex justify-center space-x-16">
          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            <Link
              to="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square text-2xl"></i>
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            <Link
              to="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square text-2xl"></i>
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            <Link
              to="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            <Link
              to="https://github.com/Vandhana-Mohan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-2xl"></i>
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            <Link
              to="https://www.linkedin.com/in/vandhanamohan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </Link>
          </li>
        </ul>
        <p className="text-center py-4 text-gray-400">
          © 2023 Vandhana Mohan. All rights reserved.
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
