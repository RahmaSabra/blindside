import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { eyePath, eyeSlashPath } from "../assets/eyePaths";

export default function EyeAnimation() {
  const eyeRef = useRef<SVGPathElement>(null);
  const slashRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.set(slashRef.current, { autoAlpha: 0 })
      .to(eyeRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        delay: 0.5,
      })
      .to(
        slashRef.current,
        {
          autoAlpha: 1,
          duration: 0.3,
        },
        "<",
      )
      .to({}, { duration: 5 })
      .to(eyeRef.current, {
        autoAlpha: 1,
        duration: 0.3,
      })
      .to(
        slashRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        "<",
      );
  });
  return (
    <div className="w-16 h-16 flex justify-center items-center bg-transparent border-3 border-primary rounded-full">
      <svg viewBox="0 1.2 56 56" width="40" height="40">
        <path ref={eyeRef} d={eyePath} />
        <path ref={slashRef} d={eyeSlashPath} />
      </svg>
    </div>
  );
}
