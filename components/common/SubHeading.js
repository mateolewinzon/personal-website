import TextComponent from "./TextComponent";

export default function SubHeading({ children, className, ...props }) {
    return (
      <TextComponent
        defaultStyles={'text-4xl font-semibold text-black dark:text-white'}
        overrideStyles={className}
        {...props}
      >
        {children}
      </TextComponent>
    );
  }

  
  