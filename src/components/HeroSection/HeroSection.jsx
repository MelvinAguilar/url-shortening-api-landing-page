import classes from "./HeroSection.module.scss";
import heroImg from "../../assets/illustration-working.svg";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__img}>
        <img src={heroImg} alt="" aria-hidden="true" />
      </div>
      <div className={classes.hero__text}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button type="button" className={classes.btn}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
