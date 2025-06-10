import { useEffect, useState } from "react";
import Image from "next/image";

type Review = {
  content: string;
  reviewer: string;
  title: string;
  image: string;
};

interface CarouselProps {
  reviews: Review[];
  interval?: number; // autoplay interval in ms, default 3000
}

const Carousel: React.FC<CarouselProps> = ({ reviews, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const autoPlay = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
      );
    }, interval);

    return () => clearInterval(autoPlay);
  }, [reviews.length, interval]);

  // Manual slide change
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-10 bg-secondary-500 p-4 py-16">
      <div className="relative mx-auto h-[12rem] max-w-[40rem] overflow-hidden no-scrollbar">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="absolute top-0 w-full"
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
              transition: "transform 1s",
            }}
          >
            <h3 className="text-center text-lg font-light leading-normal text-white">
              {item.content}
            </h3>
            <div className="flex items-center justify-center">
              <div className="mt-6 inline-flex items-center gap-2">
                <Image
                  src={item.image}
                  alt={`Image of ${item.reviewer}`}
                  width={100}
                  height={100}
                  priority
                  className="h-10 w-10 rounded-full object-cover object-center"
                />
                <div>
                  <h4 className="text-sm text-white">{item.reviewer}</h4>
                  <p className="text-xs text-primary-50">{item.title}</p>
                </div>
              </div>
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
  );
};

export default Carousel;
