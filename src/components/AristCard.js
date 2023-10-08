import "./ArtistCard.css";

import "../variables.css";

const ArtistCard = (props) => {
  return (
    <div className="artist">
      <img className="artistImage" src={props.image} alt="" />

      <div className="artistText">
        <div className="artistName">{props.name}</div>
        <p className="artistDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
