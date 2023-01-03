import { TextComponent } from ".";

type Props = { children: React.ReactNode, className?: string }

export const SpanSecondary = ({ children, className, ...props }: Props) => {
  return (
    <TextComponent
      defaultStyles={"text-gray-900 dark:text-gray-200"}
      overrideStyles={className}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
