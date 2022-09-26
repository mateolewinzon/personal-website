import { twMerge } from "tailwind-merge";

export const TextComponent: React.FC = ({
  children,
  defaultStyles,
  overrideStyles,
  as: Component = 'span',
  ...props
}) => {

  const classes = twMerge(`${defaultStyles} ${overrideStyles ?? ""}`);
  
  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
}
