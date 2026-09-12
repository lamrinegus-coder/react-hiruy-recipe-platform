function Header({ currentView, setCurrentView }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="logo">Hiruy Recipe Platform</h1>
        <nav className="main-nav">
          <button
            className={currentView === "home" ? "active" : ""}
            onClick={() => setCurrentView("home")}
          >
            Home
          </button>
          <button
            className={currentView === "add" ? "active" : ""}
            onClick={() => setCurrentView("add")}
          >
            Add Recipe
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
