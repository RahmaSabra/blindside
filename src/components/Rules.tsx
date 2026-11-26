import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import type { Mode } from "../types/mode";
import type { Rule } from "../types/rules";

export default function Rules() {
  const { t, i18n } = useTranslation();
  const [showRules, setShowRules] = useState(false);
  const [modeRule, setModeRule] = useState<Mode>("classic");
  const rules = t(`rules.${modeRule}.items`, {
    returnObjects: true,
  }) as Rule[];

  return (
    <>
      <button onClick={() => setShowRules(true)}>{t("rules.title")}</button>

      {showRules && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div
            className="bg-bg text-primary border-2 w-fit p-2 mx-4 shadow-[3px_4px_0px_var(--color-primary)] z-50 "
            dir={i18n.dir()}
          >
            <div className="flex flex-col">
              <h1 className="font-extrabold mb-1">{t("rules.chooseMode")}</h1>
              <div className="flex flex-row gap-4 md:gap-8">
                <button
                  onClick={() => setModeRule("classic")}
                  className={clsx(
                    "py-0.5 px-1 rounded-t-md",
                    modeRule === "classic" ? "bg-black/10" : "bg-transparent",
                  )}
                >
                  Classic
                </button>
                <button
                  onClick={() => setModeRule("doubleAgent")}
                  className={clsx(
                    "py-0.5 px-1 rounded-t-md",
                    modeRule === "doubleAgent"
                      ? "bg-black/10"
                      : "bg-transparent",
                  )}
                >
                  Double Agent
                </button>
                <button
                  onClick={() => setModeRule("oddOneOut")}
                  className={clsx(
                    "py-0.5 px-1 rounded-t-md",
                    modeRule === "oddOneOut" ? "bg-black/10" : "bg-transparent",
                  )}
                >
                  Odd One Out
                </button>
              </div>

              <div className="bg-black/10 p-2 rounded-b-lg h-72 max-w-160 overflow-y-auto">
                <h2 className="font-bold">
                  {t(`rules.${modeRule}.description`)}
                </h2>

                <div className="p-4">
                  {rules.map((item, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowRules(false)}
              className="bg-black/10 py-0.5 px-1 mt-2 rounded-md"
            >
              {t("rules.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
