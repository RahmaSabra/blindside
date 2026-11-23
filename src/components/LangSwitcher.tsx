import { useTranslation } from "react-i18next";
import globe from "../assets/icons/globe.svg";

type LangSwitcherProps = {
  isDarkMode: boolean;
};

export default function LangSwitcher({ isDarkMode }: LangSwitcherProps) {
  const { i18n } = useTranslation();

  const handleLanguageChange = async () => {
    const newLanguage = i18n.language === "ar" ? "en" : "ar";

    await i18n.changeLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return (
    <button
      className="flex flex-row justify-center items-center gap-1 py-1 px-1.5 cursor-pointer"
      onClick={handleLanguageChange}
    >
      <img
        src={globe}
        alt="globe symbol, language change button"
        width={28}
        className={isDarkMode ? "invert" : ""}
      />
      <div className="bg-primary w-0.5 h-6"></div>
      <p className="text-primary text-xl uppercase ">{i18n.language}</p>
    </button>
  );
}
