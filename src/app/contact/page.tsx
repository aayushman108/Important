"use client";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../../styles/contact.scss";

export default function ContactPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  console.log(currentIndex, "current");

  const itemsPerSlide = 6.5; //Items per slide
  const gap = 1; //In rem

  const itemCount = 20; //Item count

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
    setPrevIndex(currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - itemsPerSlide ? prevIndex : prevIndex + 1
    );
    setPrevIndex(currentIndex);
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
      <main className="contact">
        <div
          className={`contact__main`}
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
              style={{
                padding: `0 ${gap / 2}rem`,
                maxWidth: `${100 / itemsPerSlide}%`,
                flexBasis: `${100 / itemsPerSlide}%`,
                aspectRatio: 1,
              }}
            >
              <div className="inner">Item {index + 1}</div>
            </div>
          ))}
        </div>
      </main>

      {/* BUTTONS */}
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex > itemCount - itemsPerSlide}
      >
        Next
      </button>
    </>
  );
}
