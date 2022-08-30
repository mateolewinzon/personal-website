import JobsListItem from "./jobs-list-item";

function JobsList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <JobsListItem item={item} />
      ))}
    </div>
  );
}

export default JobsList;
