type Props = {
  tags: string[];
  className?: string;
};

export const PostTags = ({ tags }: Props) => {
  return (
    <div className='flex flex-wrap gap-3'>
      {tags?.map((tag) => (
        <span
          key={tag}
          className="text-base text-black rounded-xl bg-gray-100 dark:text-gray-100 dark:bg-gray-700 py-1.5 px-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
