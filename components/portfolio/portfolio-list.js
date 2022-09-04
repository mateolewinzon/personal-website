import PortfolioItem from "./portfolio-list-item";

function PortfolioList({ items }) {
  return (
    <div>
      {items.map((item, key) => (
        <PortfolioItem key={key} item={item} />
      ))}
    </div>
  );
}

export default PortfolioList;
