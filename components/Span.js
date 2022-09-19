import { TextComponent } from "./";

export function Span({ children, className, ...props }) {
  return (
    <TextComponent
      defaultStyles={"text-lg text-gray-dark dark:text-gray-light"}
      overrideStyles={className}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
