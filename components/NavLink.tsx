import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
};

export const NavLink = ({ href, isActive, children }: Props) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "block font-medium text-gray-800 dark:text-white dark:hover:text-gray-100 text-lg px-3 py-1 rounded-lg",
        isActive && "dark:text-gray-100 text-gray-700"
      )}
    >
      {children}
    </Link>
  );
};
