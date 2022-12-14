import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const handleToggleNavigation = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img src="/assets/shared/logo.svg" alt="Space Tourism Logo" className="logo" />
      </div>
      <button
        onClick={handleToggleNavigation}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={toggleNavigation}
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav className="flex" style={{ alignItems: 'center', flexDirection: 'row' }}>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex navbar"
          data-visibility={toggleNavigation}
        >
          <NavLink
            className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
            to="/"
          >
            <span aria-hidden="true">00</span>Home
          </NavLink>

          <NavLink
            className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
            to="/destination"
          >
            <span aria-hidden="true">01</span>Destination
          </NavLink>

          <NavLink
            className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
            to="/crew"
          >
            <span aria-hidden="true">02</span>Crew
          </NavLink>

          <NavLink
            className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
            to="/technology"
          >
            <span aria-hidden="true">03</span>Technology
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
