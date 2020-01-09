import React from "react";
import "./../styles.css";

export const Square = props => {
  const { value, fx, status } = props;

  let classes = value || status ? "Square" : "Square active";
  const inputProps = {
    className: classes,
    onClick: fx
  };

  if (value || status) inputProps.disabled = true;

  return <button {...inputProps}>{value}</button>;
};
