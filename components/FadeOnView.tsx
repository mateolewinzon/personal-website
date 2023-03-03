import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
};

export const FadeOnView = ({ children }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={twMerge(inView && "animate-fadeIn")}>
      {children}
    </div>
  );
};
