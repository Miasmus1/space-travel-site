import { useState } from 'react';

const NavBar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const handleToggleNavigation = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img
          src="/assets/shared/logo.svg"
          alt="Space Tourism Logo"
          className="logo"
        />
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
      <nav
        className="flex"
        style={{ alignItems: 'center', flexDirection: 'row' }}
      >
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex navbar"
          data-visibility={toggleNavigation}
        >
          <li className="active">
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">00</span>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">01</span>
              Destination
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">02</span>
              Crew
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span aria-hidden="true">03</span>
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
