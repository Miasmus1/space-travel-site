import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import classes from './Navbar.module.css';

const NavBar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const handleToggleNavigation = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <header className={`${classes['primary-header']} flex`}>
      <div>
        <NavLink to="/">
          <img
            src="/assets/shared/logo.svg"
            alt="Space Tourism Logo"
            height="48"
            width="48"
            className={classes.logo}
          />
        </NavLink>
      </div>
      <button
        onClick={handleToggleNavigation}
        className={classes['mobile-nav-toggle']}
        aria-controls="primary-navigation"
        aria-expanded={toggleNavigation}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav
        className="flex"
        style={{ alignItems: 'center', flexDirection: 'row' }}
      >
        <ul
          id="primary-navigation"
          className={`${classes['primary-navigation']} ${classes.navbar} underline-indicators flex`}
          data-visibility={toggleNavigation}
        >
          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
              to="/"
            >
              <span aria-hidden="true">00</span>Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
              to="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </NavLink>
          </li>

          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
              to="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </NavLink>
          </li>

          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2 
            ${(navData) => (navData.isActive ? 'active' : '')}`}
              to="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
