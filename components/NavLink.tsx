import Link from "next/link";

type Props = {
  href: string,
  isActive?: boolean,
  children: React.ReactNode
}

export const NavLink = ({ href, isActive, children }: Props) => {
  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? "font-semibold dark:text-white" : "font-normal"
        } hover:bg-gray-light dark:hover:bg-black-800 dark:text-gray-light text-lg px-3 py-1 mr-1 rounded-lg `}
      >
        {children}
      </a>
    </Link>
  );
}
