import classes from "./Navbar.module.scss";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // If the menu is open prevent scrolling
    if (isMenuOpen) {
      document.body.classList.remove(classes.disableScroll);
    } else {
      document.body.classList.add(classes.disableScroll);
    }
  };

  return (
    <div className={classes.nav}>
      <nav className={classes.navbar}>
        <ul
          className={`${classes.navList} ${isMenuOpen ? classes.open : ""}`}
          id="nav-list"
        >
          <li>
            <a href="#" className={classes.navbar__link}>
              Features
            </a>
          </li>
          <li>
            <a href="#" className={classes.navbar__link}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className={classes.navbar__link}>
              Resources
            </a>
          </li>
          <li className={classes.navbar__itemLogin}>
            <a
              href="#"
              className={`${classes.btn} ${classes.navbar__link} ${classes.btnLogin}`}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${classes.btn} ${classes.navbar__link} ${classes.btnSignup}`}
            >
              Sign Up
            </a>
          </li>
        </ul>

        <button
          className={`${classes.hamburger} ${isMenuOpen ? classes.open : ""}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-list"
          onClick={toggleMenu}
        >
          <span
            className={`${classes.hamburger__box} ${classes.hamburger__box1}`}
          ></span>
          <span
            className={`${classes.hamburger__box} ${classes.hamburger__box2}`}
          ></span>
          <span
            className={`${classes.hamburger__box} ${classes.hamburger__box3}`}
          ></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
