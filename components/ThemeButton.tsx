import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeButton = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (theme) {
      if (theme === "dark") {
        document.body.classList.replace("light", "dark");
      } else if (theme === "light") {
        document.body.classList.replace("dark", "light");
      }
      localStorage.setItem("theme", theme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      const startingTheme = localStorage.getItem("theme") || systemTheme;
      setTheme(startingTheme);
      document.body.classList.add(startingTheme);
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl dark:text-white"
    >
      {theme === "dark" ? (
        <BsFillSunFill size={"25"} />
      ) : (
        <BsFillMoonStarsFill size={"25"} />
      )}
    </button>
  );
}
