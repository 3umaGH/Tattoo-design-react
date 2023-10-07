
import SlowPrintText from "./SlowPrintText";
import "./Thumbnail.css";

const Thumbnail = (props) => {


  return (
    <div className="parallaxThumb">
      <div className="parallaxContents">
        <div className="slogan">
          {props.slogan}<span className="sloganHighlight"> <SlowPrintText charInterval={100} fullText={props.sloganHighlight}/> </span>
        </div>
        <div className="sloganSmall">
          {props.description}
        </div>
        {props.content}
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="44"
            viewBox="0 0 16 44"
            fill="none"
          >
            <path
              d="M15 35.875L8.25 42.625L1.5 35.875M8.25 41.6875L8.25 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
