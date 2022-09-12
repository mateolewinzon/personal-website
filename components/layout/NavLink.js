import Link from "next/link";

export default function NavLink({ href, isActive, children }) {
  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? "text-gray-dark" : "text-gray"
        } hover:bg-gray-light hover:text-gray-dark mr-2 md:mr-4 py-2 px-2 md:px-4 font-semibold text-lg rounded-lg `}
      >
        {children}
      </a>
    </Link>
  );
}
