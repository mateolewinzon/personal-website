import { Span } from ".";

type Props = {
  tags: string[]
}

export const PostTags = ({ tags, ...props }) => {
  return (
    <div {...props}>
      {tags.map((tag) => (
        <Span
          key={tag}
          className="inline text-black rounded-xl mr-3 bg-gray-100 dark:text-gray dark:bg-black-800 p-1.5"
        >
          {tag}
        </Span>
      ))}
    </div>
  );
}
