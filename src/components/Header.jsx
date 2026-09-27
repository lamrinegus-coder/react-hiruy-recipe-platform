import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="logo">Hiruy Recipe Platform</h1>
        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Recipe
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
