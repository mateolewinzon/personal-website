import { twMerge } from "tailwind-merge";

export default function TextComponent({
  children,
  defaultStyles,
  overrideStyles,
  ...props
}) {

  const classes = twMerge(`${defaultStyles} ${overrideStyles ?? ""}`);

  return (
    <span
      className={classes}
      {...props}
    >
      {children}
    </span>
  );
}
