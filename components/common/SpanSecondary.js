import TextComponent from "./TextComponent";

export default function SpanSecondary({ children, className, ...props  }) {
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
  