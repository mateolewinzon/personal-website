import { TextComponent } from "./";

export function SubHeading({
  children,
  className,
  as = "h2",
  ...props
}) {
  return (
    <TextComponent
      defaultStyles={"text-4xl font-semibold text-black dark:text-white"}
      overrideStyles={className}
      {...props}
      as={as}
    >
      {children}
    </TextComponent>
  );
}
