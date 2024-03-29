type Props = {
  children: React.ReactNode;
};

export const MDXComponents = {
  a: ({ children, ...props }: Props) => (
    <a target='_blank' rel="noreferrer" className="my-3 text-blue underline" {...props}>
      {children}
    </a>
  ),
};