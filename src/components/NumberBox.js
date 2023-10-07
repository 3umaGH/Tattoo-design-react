import CountUpElement from "./CountUpElement";
import "./NumberBox.css";

const NumberBox = ({ value, label }) => {
  return (
    <div className="NumberBox">
      <h2 className="numValue">{<CountUpElement end={value} duration={4}/>}+</h2>
      <h4 className="numLabel">{label}</h4>
    </div>
  );
};

export default NumberBox;
