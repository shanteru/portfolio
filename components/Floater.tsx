"use client";
import { ReactElement } from "react";
import CountUp from "react-countup";

interface FloaterProps {
  containerStyles: string;
  icon: ReactElement;
  endCountNum: number;
  endCountText?: string;
  floaterText: string;
}

const Floater: React.FC<FloaterProps> = ({
  containerStyles,
  icon,
  endCountNum,
  floaterText,
  endCountText,
}) => {
  return (
    <div className={`floater ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black" font-medium>
          {floaterText}
        </div>
      </div>
     
    </div>
  );
};

export default Floater;
