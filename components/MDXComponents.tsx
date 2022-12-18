import { Heading, Span, SubHeading } from ".";

type Props = {
  children: React.ReactNode
}

export const MDXComponents = {
  h1: ({ children, ...props }: Props) => (
    <Heading className="my-5" {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }: Props) => (
    <SubHeading className="my-5" {...props}>
      {children}
    </SubHeading>
  ),
  p: ({ children, ...props }: Props) => (
    <Span className="my-3" {...props}>
      {children}
    </Span>
  ),
  a: ({ children, ...props }: Props) => (
    <a className="my-3 text-blue underline" {...props}>
      {children}
    </a>
  ),
};
