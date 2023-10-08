import Navbar from "./Navbar";
import "./Layout";

import "../../variables.css";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
