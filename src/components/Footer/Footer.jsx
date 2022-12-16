import classes from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__content}>
          <a href="#" className={classes.footer__logo}>
            <img src={logo} alt="Shortly" className={classes.footer__logoImg} />
          </a>

          <dl className={classes.footer__list}>
            <div className={classes.footer__listItem}>
              <dt className={classes.footer__listTitle}>Features</dt>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Link Shortening
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Branded Links
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Analytics
                </a>
              </dd>
            </div>
            <div className={classes.footer__listItem}>
              <dt className={classes.footer__listTitle}>Resources</dt>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Blog
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Developers
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Support
                </a>
              </dd>
            </div>
            <div className={classes.footer__listItem}>
              <dt className={classes.footer__listTitle}>Company</dt>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  About
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Our Team
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Careers
                </a>
              </dd>
              <dd className={classes.footer__listDesc}>
                <a href="#" className={classes.footer__listLink}>
                  Contact
                </a>
              </dd>
            </div>
          </dl>

          <FooterLinks />
        </div>

        <p className={classes.footer__attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer noopener"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/MelvinAguilar"
            target="_blank"
            rel="noreferrer noopener"
          >
            Melvin Aguilar
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
