import { useEffect, useState } from "react";
import Image from "next/image";
import InternImage from "@/public/images/internship.jpeg";

type Review = {
  content: string;
  reviewer: string;
  title: string;
  image?: string;
};

interface CarouselProps {
  reviews: Review[];
  interval?: number; // autoplay interval in ms, default 3000
}

const Carousel: React.FC<CarouselProps> = ({ reviews, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // // Autoplay effect
  // useEffect(() => {
  //   const autoPlay = setInterval(() => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
  //     );
  //   }, interval);

  //   return () => clearInterval(autoPlay); // Clean up on component unmount
  // }, [reviews.length, interval]);

  // Manual slide change
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-10 bg-secondary-500 p-8">
      <div className="no-scrollbar mx-auto w-[70%] overflow-hidden">
        <div className="flex w-max space-x-5 transition-transform duration-500">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="max-w-xl"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`, // Shift based on the active index
              }}
            >
              <h3 className="text-center text-lg font-light leading-normal text-white">
                {item.content}
              </h3>
              <div className="mt-6 flex flex-col items-center">
                <Image
                  src={InternImage}
                  alt={`Image of ${item.reviewer}`}
                  className="h-10 w-10 rounded-full object-cover object-center"
                />
                <h4 className="text-sm text-white">{item.reviewer}</h4>
                <p className="text-xs text-primary-200">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Pagination */}
        <div className="mt-4 flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === activeIndex ? "bg-primary-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
