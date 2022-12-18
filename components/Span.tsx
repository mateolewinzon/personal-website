import { TextComponent } from ".";

type Props = {
  className?: string,
  children: React.ReactNode
}

export const Span = ({ children, className, ...props }: Props) => {
  return (
    <TextComponent
      defaultStyles={"text-lg text-gray-900 dark:text-gray-light"}
      overrideStyles={className}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
