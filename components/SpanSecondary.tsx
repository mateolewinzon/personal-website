import { TextComponent } from ".";

export const SpanSecondary: React.FC = ({ children, className, ...props }) => {
  return (
    <TextComponent
      defaultStyles={"text-gray-dark dark:text-gray"}
      overrideStyles={className}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
