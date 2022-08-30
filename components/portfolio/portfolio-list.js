import PortfolioItem from "./portfolio-list-item";

function PortfolioList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <PortfolioItem item={item} />
      ))}
    </div>
  );
}

export default PortfolioList;
