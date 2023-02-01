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
          className="nowrap inline text-black rounded-xl mr-3 bg-gray-100 dark:text-gray-100 dark:bg-black-800 py-1.5 px-2"
        >
          {tag}
        </Span>
      ))}
    </div>
  );
}
