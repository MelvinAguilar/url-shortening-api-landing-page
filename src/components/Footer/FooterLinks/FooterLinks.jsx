import classes from "./FooterLinks.module.scss";
import iconFacebook from "../../../assets/icon-facebook.svg";
import iconTwitter from "../../../assets/icon-twitter.svg";
import iconPinterest from "../../../assets/icon-pinterest.svg";
import iconInstagram from "../../../assets/icon-instagram.svg";

const FooterLinks = () => {
  return (
    <div className={classes.footerLinks}>
      <ul className={classes.footerLinks__list}>
        <li className={classes.footerLinks__listItem}>
          <a
            href="#"
            className={classes.footerLinks__listLink}
            aria-label="Facebook"
          >
            <img src={iconFacebook} alt="" aria-hidden="true" />
          </a>
        </li>
        <li className={classes.footerLinks__listItem}>
          <a
            href="#"
            className={classes.footerLinks__listLink}
            aria-label="Twitter"
          >
            <img src={iconTwitter} alt="" aria-hidden="true" />
          </a>
        </li>
        <li className={classes.footerLinks__listItem}>
          <a
            href="#"
            className={classes.footerLinks__listLink}
            aria-label="Pinterest"
          >
            <img src={iconPinterest} alt="" aria-hidden="true" />
          </a>
        </li>
        <li className={classes.footerLinks__listItem}>
          <a
            href="#"
            className={classes.footerLinks__listLink}
            aria-label="Instagram"
          >
            <img src={iconInstagram} alt="" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
