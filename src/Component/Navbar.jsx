import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between p-6 bg-blue-500 text-white border-b">
        <div className="logo">
          <Link to="/">MeetingRooms</Link>
        </div>
        <div className="links">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/meeting-rooms" className="mr-4">
            Meeting Rooms
          </Link>
          <Link to="/about" className="mr-4">
            About Us
          </Link>
          <Link to="/contact" className="mr-4">
            Contact Us
          </Link>
          <Link to="/login">Login/Register</Link>
        </div>
      </nav>
    );
};

export default Navbar;