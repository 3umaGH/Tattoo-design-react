import "./Icon.css";

const Icon = ({ iconPath, style }) => {
  return (
    <img src={iconPath} style={style} alt="" />

  );
};

export default Icon;
