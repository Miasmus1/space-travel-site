import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <header className="primary-header flex">
      <div>
        <img src="/assets/shared/logo.svg" />
      </div>
      <nav
        className="flex"
        style={{ alignItems: 'center', flexDirection: 'row' }}
      >
        <ul
          className="primary-navigation underline-indicators flex navbar"
          style={{ justifyContent: 'center' }}
        >
          <li className="active">
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>00</span>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>01</span>
              Destination
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>02</span>
              Crew
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>03</span>
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;