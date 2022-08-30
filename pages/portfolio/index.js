import PortfolioList from "../../components/portfolio/PortfolioList";
import { getPortfolio } from "../../mocks/portfolio";

function Portfolio() {
  const portfolioData = getPortfolio();

  return (
    <div>
      <PortfolioList items={portfolioData} />
    </div>
  );
}

export default Portfolio;
