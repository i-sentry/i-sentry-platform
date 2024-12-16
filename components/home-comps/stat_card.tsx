"use client";
import SmartButton from "../custom_button";
import React, { useEffect, useRef, useState } from "react";

type ComponentProps = {
  percentage: number;
  title: string;
  symbol: string;
  duration: number;
  steps: number;
};

const StatCard: React.FC<ComponentProps> = ({
  percentage,
  title,
  duration,
  steps,
  symbol,
}) => {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const counterRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.7 }, // Fully visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const time = duration;
      const interval = Math.round(time / 100); // Time per increment
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= (percentage || 24)) {
            clearInterval(timer);
            return percentage;
          }
          return prevCount + steps;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [duration, isVisible, percentage, steps]);

  return (
    <div className="stat rounded-xl border border-[#FAFAFA1F] bg-stats p-6 backdrop-blur-lg">
      <h3 className="text-4xl text-white" ref={counterRef}>
        {count}
        {symbol}
      </h3>
      <p className="mb-6 mt-3 font-inter text-sm font-extralight lowercase text-white">
        {title}
      </p>

      <SmartButton
        variant="dark"
        buttonText="Learn more"
        className="mt-4 border-[#F4F4F40D] backdrop-blur-none hover:shadow-none"
        showAnimatedIcon
        url="/about"
        isLink
      />
    </div>
  );
};

export default StatCard;
