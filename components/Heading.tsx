import { TextComponent } from ".";

type Props = {
  children: React.ReactNode,
  className?: string,
  as?: React.ElementType,
}

export const Heading = ({ children, className, as = "h1", ...props }: Props) => {
  return (
    <TextComponent
      {...props}
      defaultStyles={"text-5xl font-bold text-black dark:text-white inline"}
      overrideStyles={className}
      as={as}
    >
      {children}
    </TextComponent>
  );
}
