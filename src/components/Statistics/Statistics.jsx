import classes from "./Statistics.module.scss";
import reconigtionIcon from "./../../assets/icon-brand-recognition.svg";
import recordsIcon from "../../assets/icon-detailed-records.svg";
import customizableIcon from "../../assets/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className={classes.statistics}>
      <h2 className={classes.statistics__title}>Advanced Statistics</h2>
      <p className={classes.statistics__text}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className={classes.statistics__cards}>
        <div className={classes.statistics__card}>
          <div className={classes.statistics__cardIconWrapper}>
            <img
              src={reconigtionIcon}
              alt=""
              aria-hidden="true"
              className={classes.statistics__cardIcon}
            />
          </div>
          <h3 className={classes.statistics__cardTitle}>Brand Recognition</h3>
          <p className={classes.statistics__cardText}>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={classes.statistics__card}>
          <div className={classes.statistics__cardIconWrapper}>
            <img
              src={recordsIcon}
              alt=""
              aria-hidden="true"
              className={classes.statistics__cardIcon}
            />
          </div>
          <h3 className={classes.statistics__cardTitle}>Detailed Records</h3>
          <p className={classes.statistics__cardText}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={classes.statistics__card}>
          <div className={classes.statistics__cardIconWrapper}>
            <img
              src={customizableIcon}
              alt=""
              aria-hidden="true"
              className={classes.statistics__cardIcon}
            />
          </div>
          <h3 className={classes.statistics__cardTitle}>Fully Customizable</h3>
          <p className={classes.statistics__cardText}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
