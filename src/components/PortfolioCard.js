import "./PortfolioCard.css";

const PortfolioCard = (props) => {
  return (
    <div className="portfolioCard">
      
      <img className="portfolioImage" src={props.image} alt="" />

      
    </div>
  );
};

export default PortfolioCard;
