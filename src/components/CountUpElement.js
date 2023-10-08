import { React } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUpElement = ({ end, duration }) => {
  let textLoaded = false;

  if (textLoaded) return <span>{end}</span>;

  return (
    <CountUp end={end} duration={duration} redraw={true}>
      {({ countUpRef, start }) => {
        return (
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible && textLoaded == false) {
                textLoaded = true;
                start();
              }
            }}
            delayedCall
          >
            <span ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default CountUpElement;
