type Props = {
  tags: string[];
  className?: string;
};

export const PostTags = ({ tags, className }: Props) => {
  return (
    <div className={className}>
      {tags?.map((tag) => (
        <span
          key={tag}
          className="text-base text-black rounded-xl mr-3 bg-gray-100 dark:text-gray-100 dark:bg-slate-800 py-1.5 px-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
