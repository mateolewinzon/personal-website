import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-xl dark:text-white"
    >
      {resolvedTheme === "light" ? (
        <BsFillSunFill size={"25"} />
      ) : (
        <BsFillMoonStarsFill size={"25"} />
      )}
    </button>
  );
};
