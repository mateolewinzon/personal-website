import TextComponent from "./TextComponent";

export default function Span({ children, className, ...props }) {
  return (
    <TextComponent
      defaultStyles={"text-xl text-gray-dark dark:text-gray-light"}
      overrideStyles={className}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
