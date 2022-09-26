import { TextComponent } from ".";

export const Heading: React.FC = ({ children, className, as = "h1", ...props }) => {
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
