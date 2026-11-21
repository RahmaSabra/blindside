import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="min-h-screen bg-bg">
      <h1 className="text-2xl text-center text-primary">hello world</h1>
    </div>
  );
}
