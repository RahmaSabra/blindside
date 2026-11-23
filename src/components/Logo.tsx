import EyeAnimation from "./EyeAnimation";
type LogoProps = {
  isDarkMode: boolean;
};

export default function Logo({ isDarkMode }: LogoProps) {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <EyeAnimation isDarkMode={isDarkMode} />
      <h1 className="text-primary text-3xl md:text-5xl">Blindside</h1>
    </div>
  );
}
