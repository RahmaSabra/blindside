import type { ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";
import LangSwitcher from "./LangSwitcher";
import ThemeSelector from "./ThemeSelector";
import Logo from "./Logo";
import type { Theme } from "../types/theme";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme>("yellow");
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setThemeHandler = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="flex flex-row mb-8 mt-2">
        {/*rules component goes here */}
        <div className="flex flex-row gap-1.5 md:gap-3">
          <LangSwitcher isDarkMode={isDarkMode} />
          <ThemeSelector onClick={setThemeHandler} isDarkMode={isDarkMode} />
        </div>
      </div>
      <Logo isDarkMode={isDarkMode} />

      {children}
    </div>
  );
}
