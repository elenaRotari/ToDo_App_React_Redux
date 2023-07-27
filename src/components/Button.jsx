import React from "react";
const styles = {
  primary: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontWeight: 900,
    cursor: "pointer",
  },
  secondary: {
    backgroundColor: "green",
    fontWeight: 900,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  cancel: {
    backgroundColor: "red",
    fontWeight: 900,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};
const Button = ({ name, onClick, type, style }) => {
  return (
    <button
      onClick={() => onClick((prev) => !prev)}
      type={type === "submit" ? "submit" : "button"}
      style={styles[style]}
    >
      {name}
    </button>
  );
};

export default Button;
