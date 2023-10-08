import Button from "../Button";
import Logo from "../Logo";
import Icon from "../Icon";
import "./Navbar.css";

import "../../variables.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <header>
        <Logo className="logo" />

        <ul className="links">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Artists</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>

        <div
          className="bookAppointment"
          onClick={() => {
            alert("Book");
          }}
        >
          <Button
            style={{
              paddingTop: 11,
              paddingBottom: 11,
            }}
          >
            Book an appointment
          </Button>
          <Icon
              iconPath={"../img/assets/arrow-forward-outline.png"}
            />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
