import classes from "./ShortenedLink.module.scss";
import Form from "../Form/Form";
import { useState, useEffect } from "react";
import Services from "../../services/Services";
import SingleLink from "./SingleLink/SingleLink";
import { toast } from "react-toastify";
import React from "react";

const ShortenedLink = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks();
  }, []);

  // Store the references to the buttons in an object
  let references = {};

  const getOrCreateRef = (key) => {
    if (!references.hasOwnProperty(key)) {
      references[key] = React.createRef();
    }
    return references[key];
  };

  const setFocusToButton = (key) => {
    // Scroll to the button
    references[key].current &&
      references[key].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    // Set focus to the button
    references[key].current &&
      references[key].current.focus({ preventScroll: true });
  };

  const fetchLinks = async () => {
    const links = JSON.parse(localStorage.getItem("links"));
    if (links) setLinks(links);
  };

  const handleErrors = (code) => {
    const msg = {
      1: "No URL specified",
      2: "Invalid URL submitted",
      3: "Rate limit reached. Wait a second and try again",
      4: "IP-Address has been blocked because of violating terms of service of the application",
      5: "shrtcode code already taken/in use",
      6: "Unknown error",
      7: "No code specified",
      8: "Invalid code submitted (there is no such short-link)",
      9: "Missing required parameters",
      10: "The link you entered is a disallowed link by pishing protection",
    };

    toast.error(msg[code]);
  };

  const createShortLink = async (link) => {
    const response = await Services.createShortLink(link);

    if (!response.ok) {
      handleErrors(response.error_code);
      return false;
    }

    const { result } = response;
    const linkExists = links.find(
      (link) => link.original_link === result.original_link
    );

    if (linkExists) {
      toast.warning("This link has already been shortened");
      setFocusToButton(linkExists.code);
      return true;
    }

    setLinks([result, ...links]);
    localStorage.setItem("links", JSON.stringify([result, ...links]));
    return true;
  };

  return (
    <div className={classes.shortenedLink}>
      <Form onHandleSubmit={createShortLink} />

      <div
        className={classes.shortenedLink__container}
        aria-live="polite"
        aria-atomic="true"
      >
        {links.map((link) => (
          <SingleLink
            key={link.code}
            link={link}
            ref={getOrCreateRef(link.code)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortenedLink;
