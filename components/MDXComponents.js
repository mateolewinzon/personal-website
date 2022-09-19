import { Heading, Span, SubHeading } from "./";

export const MDXComponents = {
  h1: ({ children, ...props }) => (
    <Heading className="my-5" {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }) => (
    <SubHeading className="my-5" {...props}>
      {children}
    </SubHeading>
  ),
  p: ({ children, ...props }) => (
    <Span className="my-3" {...props}>
      {children}
    </Span>
  ),
};
