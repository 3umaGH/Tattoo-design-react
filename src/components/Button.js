import "./Button.css";

import "../variables.css";
const Button = (props) => {
  return (
    <button className="ButtonTransparent" style={props.style}>
      {props.children}
    </button>
  );
};

export default Button;
