import classes from "./Button.module.scss";

const Button = ({ children, className = "", innerRef, ...rest }) => {
  return (
    <button
      className={`${classes["button"]} ${className}`}
      {...rest}
      {...(innerRef && { ref: innerRef })}
    >
      {children}
    </button>
  );
};

export default Button;
