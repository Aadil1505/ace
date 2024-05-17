import OrbitingCircles from "@/components/ui/orbiting-circles";
import { Circle, CircleDollarSign, Gamepad2, MessageSquareCode  } from "lucide-react";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Life
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <BasketballIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <CircleDollarSign />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <MessageSquareCode />
      </OrbitingCircles>
      
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Gamepad2 />
      </OrbitingCircles>
    </div>
  );
}







const BasketballIcon = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="rotate(25 12 12)">
        {/* Basketball circle */}
        <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
        
        {/* Curved lines */}
        <path d="M12 2a10 10 0 0 0 0 20" />
        <path d="M2 12a10 10 0 0 1 20 0" />
        <path d="M5.5 5.5a10 10 0 0 1 13 13" />
        <path d="M18.5 5.5a10 10 0 0 0-13 13" />

        {/* Vertical line */}
        <line x1="12" y1="2" x2="12" y2="22" />
      </g>
    </svg>
  );
};