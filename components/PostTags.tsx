import { Span } from ".";

type Props = {
  tags: string[],
  className?: string
}

export const PostTags = ({ tags, className }: Props) => {
  return (
    <div className={className}>
      {tags?.map((tag) => (
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
