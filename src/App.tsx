import { useState } from "react";
import { useEffect } from "react";
import type { Theme } from "./types/theme";
import ThemeSelector from "./components/ThemeSelector";

export default function App() {
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
      <ThemeSelector onClick={setThemeHandler} isDarkMode={isDarkMode} />
      <h1 className="text-2xl text-center text-primary">hello world</h1>
    </div>
  );
}
