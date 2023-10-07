import SlowPrintText from "../SlowPrintText";
import ButtonSolid from "../ButtonSolid";
import Icon from "../Icon";
import "./PhoneForm.css";

const PhoneForm = () => {
  return (
    <div className="phoneFormWrapper">
      <div className="phoneForm">
        <div>
        <h1 className="formTitle">
          ready to get{" "}
          <span className="formTitleHighlight">
            <SlowPrintText fullText={"tattooed"} charInterval={100} />
          </span>?
        </h1>
        </div>
        <div className="inputs">
          <input
            id="phone"
            class="form__input"
            type="text"
            placeholder="Phone number"
          />
          <p className="info">*We will contact you as soon as possible</p>
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
            <SlowPrintText fullText={"Send"} charInterval={100} />
            <Icon
              iconPath={"../img/assets/arrow-forward-outline.png"}
              style={{
                filter: "brightness(10)",
              }}
            />
          </ButtonSolid>
        </div>
      </div>
    </div>
  );
};

export default PhoneForm;
