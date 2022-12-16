import classes from "./ErrorMessage.module.scss";
import exclamationCircle from "./../../../assets/exclamation-circle.svg";

const ErrorMessage = ({ children, className, ...props }) => {
  return (
    <span
      className={`${classes["errorMessage"]} ${className}`}
      {...props}
      role="alert"
    >
      <img src={exclamationCircle} alt="" aria-hidden="true" />
      {children}
    </span>
  );
};

export default ErrorMessage;
