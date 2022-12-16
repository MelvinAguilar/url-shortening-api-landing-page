import classes from "./SingleLink.module.scss";
import Button from "../../Button/Button";
import React from "react";

const copyToClipboard = (str, e) => {
  e.preventDefault();
  setTimeout(() => {
    e.target.classList.remove(classes.singleLink__buttonCopied);
    e.target.textContent = "Copy";
  }, 5000);

  e.target.classList.add(classes.singleLink__buttonCopied);
  e.target.textContent = "Copied!";

  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const SingleLink = React.forwardRef(({ link }, ref) => {
  if (!link) return null;
  return (
    <div
      className={classes.singleLink}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className={classes.singleLink__link}>
        <a
          href={link.original_link}
          className={classes.singleLink__original}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.original_link}
        </a>
      </div>
      <div className={classes.singleLink__container}>
        <a
          href={link.full_short_link}
          className={classes.singleLink__shortened}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.full_short_link}
        </a>
        <Button
          innerRef={ref}
          type="button"
          className={classes.singleLink__button}
          onClick={(e) => copyToClipboard(link.full_short_link, e)}
        >
          Copy
        </Button>
      </div>
    </div>
  );
});

export default SingleLink;
