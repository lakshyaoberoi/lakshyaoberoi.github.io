import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black text-white flex justify-center bg-white space-x-6">
      <Link to="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link to="/about" className="hover:text-gray-400">
        About
      </Link>
      <Link to="/projects" className="hover:text-gray-400">
        Projects
      </Link>
      <Link to="/contact" className="hover:text-gray-400">
        Contact
      </Link>
    </nav>
  );
}
