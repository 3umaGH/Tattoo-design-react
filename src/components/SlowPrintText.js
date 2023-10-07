import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";

const SlowPrintText = ({ fullText, charInterval }) => {
  let currentChar = 1;
  let curText = fullText[0];

  let textLoaded = false;

  const [isCounting, setCounting] = useState(false);
  const [text, setText] = useState(curText);

  const printNextCharacter = (interval) => {
    if (currentChar < fullText.length) {
      curText = curText + fullText[currentChar];
      currentChar++;
    } else {
      clearInterval(interval);
      textLoaded=true;
    }
  };

  const startCounting = () => {
    if (isCounting) return;

    const interval = setInterval(() => {
      printNextCharacter(interval);
      setText(curText);
      setCounting(true);
    }, charInterval);
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && textLoaded == false) {
          textLoaded = true;
          startCounting();
        }
      }}
      delayedCall
    >
      <label>{text}</label>
    </VisibilitySensor>
  );
};

export default SlowPrintText;
