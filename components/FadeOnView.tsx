import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  className?: string
};

export const FadeOnView = ({ children, className }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={twMerge(inView && "animate-fadeIn", className)}>
      {children}
    </div>
  );
};
