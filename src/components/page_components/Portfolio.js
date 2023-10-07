import PortfolioCard from "../PortfolioCard";
import SlowPrintText from "../SlowPrintText";
import ButtonSolid from "../ButtonSolid";
import Icon from "../Icon";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolioWrapper">
      <div className="portfolio">
        <div className="portfolioTitle">
          our tattoos are made{" "}
          <span className="titleHighlight">
            With love
          </span>
        </div>

        <div>
          <div className="portfolioImages">
            <PortfolioCard image="/img/portfolio/1.png" />
            <PortfolioCard image="/img/portfolio/2.png" />
            <PortfolioCard image="/img/portfolio/3.png" />
          </div>
          <div className="portfolioImages">
            <PortfolioCard image="/img/portfolio/4.png" />
            <PortfolioCard image="/img/portfolio/5.png" />
            <PortfolioCard image="/img/portfolio/6.png" />
          </div>
        </div>
      </div>

      <ButtonSolid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 11,
          paddingRight: 28,
          paddingBottom: 11,
          paddingLeft: 32,
          gap:10,
     
        }}
      >
        View More
        <Icon
          iconPath={"../img/assets/arrow-forward-outline.png"}
          style={{
            filter: "brightness(10)",
          }}
        />
      </ButtonSolid>
    </div>
  );
};

export default Portfolio;
