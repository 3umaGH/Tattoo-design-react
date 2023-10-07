import "./AboutUs.css";

import NumberBox from "../NumberBox";

const AboutUs = () => {
  return (
    <div className="aboutUsWrapper">
      <div className="aboutus">
        <p className="title">About Us</p>

        <div className="description">
          <p>
            Welcome to the unique world of tattoos, where art and
            self-expression merge seamlessly! Our studio is a place where
            professional artists
          </p>
          <p>
            create true works of art on your skin. We take pride in our passion
            for tattoos and offer you unique and individual designs that will
            accentuate your uniqueness.
          </p>
        </div>
      </div>
      <div className="numberBoxes">
        <NumberBox value={30} label="Artists" />
        <NumberBox value={10} label="Years of Experience" />
        <NumberBox value={1000} label="Satisfied Clients" />
        <NumberBox value={5000} label="Tattoos" />
      </div>
    </div>
  );
};

export default AboutUs;
