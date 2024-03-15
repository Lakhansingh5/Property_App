import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="#" className="logo">
            <span className="span">XYZ</span> INDUSTRIES
          </a>
        </div>

        <div className="container">
          <div className="navbar-links">
            <ul>
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="button-17">Sign Up</button>
          <button className="button-17">Sign IN</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
