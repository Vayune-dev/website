import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        VAYUNE
      </div>

      <nav>

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/technology">
          Technology
        </Link>

        <Link to="/portfolio">
          Projects
        </Link>

        <Link to="/philosophy">
          Philosophy
        </Link>

      </nav>

      <Link
        to="/consultation"
        className="consult-btn"
      >
        Consultation
      </Link>

    </header>
  );
}