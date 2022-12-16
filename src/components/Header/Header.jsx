import classes from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="#main" className={classes.skipLink}>
        Skip to main content
      </a>
      <div className={classes.header__container}>
        <a href="#" className={classes.logo}>
          <img src={logo} alt="Shortly" className={classes.logoImg} />
        </a>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
