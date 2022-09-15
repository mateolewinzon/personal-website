import { twMerge } from "tailwind-merge";

export default function TextComponent({
  children,
  defaultStyles,
  overrideStyles,
  as: Component = 'span',
  ...props
}) {

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
