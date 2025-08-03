import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      {/* Logo and Title */}
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/doyaebals/image/upload/v1754034904/images_1_q04wr4.png"
          alt="doctor"
          className="logo"
        />
        <h1 className="title">Doctors Portal</h1>
      </div>

      {/* Buttons for Login / Signup */}
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">Login</Link>
        <Link to="/signup" className="auth-button">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
