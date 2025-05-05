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
    <div className="stat rounded-xl border border-[#FAFAFA1F] bg-stats p-6 text-white backdrop-blur-lg duration-300 ease-linear group-data-[theme=light]:bg-[#dedede]/50">
      <h3
        className="text-4xl text-white duration-300 ease-linear group-data-[theme=light]:text-primary-800"
        ref={counterRef}
      >
        {count}
        {symbol}
      </h3>
      <p className="mb-6 mt-3 font-inter text-sm font-light lowercase text-white duration-300 ease-linear group-data-[theme=light]:text-[#022E5A]">
        {title}
      </p>

      <SmartButton
        variant="dark"
        ariaLabel="Learn more about our services"
        buttonText="Learn more"
        className="mt-4 border-[#F4F4F40D] text-white backdrop-blur-none duration-300 ease-linear hover:shadow-none group-data-[theme=light]:bg-secondary-500"
        showAnimatedIcon
        url="/about"
        isLink
      />
    </div>
  );
};

export default StatCard;
