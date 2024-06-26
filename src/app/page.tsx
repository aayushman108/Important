"use client";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/home.scss";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState("ltr");
  const itemsPerSlide = 3;
  const itemCount = 8; // Total number of items

  useEffect(() => {
    currentIndex > 0 && setPrevIndex(currentIndex);
    prevIndex !== null &&
      setDirection(currentIndex > prevIndex ? "ltr" : "rtl");
  }, [currentIndex, prevIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - itemsPerSlide : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - itemsPerSlide ? prevIndex : prevIndex + 1
    );
  };

  const getTransformStyle = () => {
    const translateValue = -(currentIndex * 100) / itemsPerSlide;
    return {
      transform: `translateX(${translateValue}%)`,
    };
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <main className="home">
        <div
          className={`home__main ${direction}`}
          style={getTransformStyle()}
          {...swipeHandlers}
        >
          {Array.from({ length: itemCount }, (_, index) => (
            <div
              key={index}
              className={`item ${
                index >= currentIndex && index < currentIndex + itemsPerSlide
                  ? "active"
                  : ""
              }`}
              style={{ width: `${100 / itemsPerSlide}%` }}
            >
              <div className="inner">Item {index + 1}</div>
            </div>
          ))}
        </div>
      </main>
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex === itemCount - itemsPerSlide}
      >
        Next
      </button>
    </>
  );
}
