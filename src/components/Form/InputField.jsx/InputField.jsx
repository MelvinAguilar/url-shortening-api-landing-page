import classes from "./InputField.module.scss";

const inputField = ({
  children,
  className,
  label,
  nameGroup,
  validation,
  innerRef,
  ...rest
}) => {
  return (
    <div className={`${classes["inputField"]} ${className}`}>
      <input
        className={`${classes["inputField__input"]} ${
          validation ? classes["has-error"] : ""
        }`}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />

      <label
        className={`${classes["inputField__label"]} sr-only`}
        htmlFor={nameGroup}
      >
        {label}
      </label>

      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default inputField;
