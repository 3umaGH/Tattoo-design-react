import Navbar from "./Navbar";
import "./Layout";

import "../../variables.css";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
