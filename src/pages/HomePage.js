import AboutUs from "../components/page_components/AboutUs";
import OurArtists from "../components/page_components/OurArtists";
import Portfolio from "../components/page_components/Portfolio";
import PhoneForm from "../components/page_components/PhoneForm";
import FAQ from "../components/page_components/FAQ";

import Thumbnail from "../components/Thumbnail";
import SlowPrintText from "../components/SlowPrintText";
import ButtonSolid from "../components/ButtonSolid";
import Icon from "../components/Icon";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="content">
      <Thumbnail
        slogan="YOUR TATTOO IS"
        sloganHighlight={"ABOUT YOU"}
        description={
          <div>
            <p>Your Tattoo's Define You, Keep It Unique...</p>
            <p>Our talented artists are committed to bringing your vision</p>
            <p>to life with custom designs and expert craftsmanship.</p>
          </div>
        }
        content={
          <div className="bookButton">
            <ButtonSolid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 11,
                paddingRight: 28,
                paddingBottom: 11,
                paddingLeft: 32,
                marginTop: 40,
                gap: 10,
              }}
            >
              Book an appointment
              <Icon
                iconPath={"../img/assets/arrow-forward-outline.png"}
                style={{
                  filter: "brightness(10)",
                }}
              />
            </ButtonSolid>
          </div>
        }
      />
      <AboutUs />

      <OurArtists />
      <Portfolio />
      <PhoneForm/>
      <FAQ/>


    </div>
  );
};

export default HomePage;
