import JobsListItem from "./jobs-list-item";

function JobsList({ items }) {
  return (
    <div>
      {items.map((item, key) => (
        <JobsListItem key={key} item={item} />
      ))}
    </div>
  );
}

export default JobsList;
