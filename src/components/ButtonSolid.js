import "./ButtonSolid.css";

import "../variables.css";

const ButtonSolid = (props) => {
  return (
      <button className="ButtonSolid" style={props.style}>
        {props.children}
      </button>
  );
};

export default ButtonSolid;
