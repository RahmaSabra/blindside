import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Theme } from "../types/theme";
import paintPalette from "../assets/icons/paint-palette.svg";

const themes: Theme[] = [
  "dark",
  "light",
  "yellow",
  "blue",
  "green",
  "purple",
  "pink",
];

type ThemeSelectorProps = {
  onClick: (theme: Theme) => void;
  isDarkMode: boolean;
};

export default function ThemeSelector({
  onClick,
  isDarkMode,
}: ThemeSelectorProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative flex flex-col justify-center items-center">
      <button onClick={toggleMenu}>
        <img
          className={isDarkMode ? "invert" : ""}
          src={paintPalette}
          alt="paint palette icon for changing theme"
          width={24}
        />
      </button>
      <div
        className={`absolute top-full flex flex-col bg-bg text-primary border-2 w-fit p-2 shadow-[3px_4px_0px_var(--color-primary)] z-50 transition-all duration-200 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }`}
      >
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => onClick(theme)}
            className="cursor-pointer"
          >
            {t(`themes.${theme}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
