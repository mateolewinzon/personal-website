import TextComponent from "./TextComponent";

export default function Heading({ children, className, ...props }) {
  return (
    <TextComponent
      {...props}
      defaultStyles={"text-5xl font-bold text-black dark:text-white"}
      overrideStyles={className}
    >
      {children}
    </TextComponent>
  );
}
