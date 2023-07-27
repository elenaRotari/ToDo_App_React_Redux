import React from "react";
import { useDispatch } from "react-redux";
const styles = {
  primary: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontWeight: 900,
    cursor: "pointer",
    width: "100px",
  },
  secondary: {
    backgroundColor: "green",
    fontWeight: 900,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    width: "100px",
  },
  cancel: {
    width: "100px",
    backgroundColor: "red",
    fontWeight: 900,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};
const Button = ({ name, action, type, style }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(action());
  };
  return (
    <button
      onClick={handleClick}
      type={type === "submit" ? "submit" : "button"}
      style={styles[style]}
    >
      {name}
    </button>
  );
};

export default Button;
