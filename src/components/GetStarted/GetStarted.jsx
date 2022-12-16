import classes from "./GetStarted.module.scss";
import Button from "../Button/Button";

const GetStarted = () => {
  return (
    <div className={classes.getStarted}>
      <h2 className={classes.getStarted__title}>Boost your links today</h2>
      <Button className={classes.getStarted__button} type="button">
        Get Started
      </Button>
    </div>
  );
};

export default GetStarted;
