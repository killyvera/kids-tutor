import React from "react";
import Link from "next/link";
import { text } from "micro";

const TextWithLinks = ({ textData }) => {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  const formatText = (textData) => {
    const words = textData.text.split(" ");

    return (
      <>
        {words.map((word, index) => {
          if (emailRegex.test(word)) {
            return (
              <React.Fragment key={index}>
                <EmailPrefab email={word} />
                {index !== words.length - 1 && " "}
              </React.Fragment>
            );
          } else if (word.toLowerCase() === "here," || word.toLowerCase() === "aquí,") {
            return (
              <React.Fragment key={index}>
                <LinkPrefab to={textData.linkTo} text={word} />
                {index !== words.length - 1 && " "}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={index}>
              {word}
              {index !== words.length - 1 && " "}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return formatText(textData);
};

export default TextWithLinks;

const EmailPrefab = ({ email }) => {
  return <Link className="underline text-md font-semibold" href={`mailto:${email}`}>{email}</Link>;
};

const LinkPrefab = ({ to, text }) => {
  return <Link className="underline text-md font-semibold" href={to}>{text}</Link>;
};
