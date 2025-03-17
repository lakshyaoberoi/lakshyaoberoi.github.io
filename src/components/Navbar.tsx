import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full p-6 bg-white text-black flex justify-center space-x-6">
      <Link
        to="/"
        className={`${
          isActive("/") ? "font-bold text-blue-600" : "text-gray-400"
        } hover:text-gray-500 transition`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${
          isActive("/about") ? "font-bold text-blue-600" : "text-gray-400"
        } hover:text-gray-500 transition`}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`${
          isActive("/projects") ? "font-bold text-blue-600" : "text-gray-400"
        } hover:text-gray-500 transition`}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={`${
          isActive("/contact") ? "font-bold text-blue-600" : "text-gray-400"
        } hover:text-gray-500 transition`}
      >
        Contact
      </Link>
    </nav>
  );
}
