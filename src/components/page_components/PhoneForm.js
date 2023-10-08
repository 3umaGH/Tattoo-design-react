import SlowPrintText from "../SlowPrintText";
import ButtonSolid from "../ButtonSolid";
import Icon from "../Icon";

import "./PhoneForm.css";
import "../../variables.css";

const PhoneForm = () => {
  return (
    <div className="phoneFormWrapper">
      <div className="phoneForm">
        <div>
          <h1 className="formTitle">
            ready to get <span className="formTitleHighlight"><SlowPrintText fullText={"Tattooed"} charInterval={100} /></span>?
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
            className="phoneButton"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 11,
              paddingRight: 28,
              paddingBottom: 11,
              paddingLeft: 32,
              gap: 10,
            }}
          >
            Send
            <Icon
              iconPath={"../img/assets/arrow-forward-outline.png"}
              style={{
                filter: "brightness(10)",
                width: "100%",
                height: "auto",
              }}
            />
          </ButtonSolid>
        </div>
      </div>
    </div>
  );
};

export default PhoneForm;
