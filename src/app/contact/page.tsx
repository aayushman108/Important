"use client";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../../styles/contact.scss";

export default function ContactPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);

  const itemsPerSlide = 6.5; //Items per slide
  const gap = 1; //In rem
  const itemsToSlide = 2;

  const itemCount = 20; //Item count

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? prevIndex
        : prevIndex - itemsToSlide <= 0
        ? 0
        : prevIndex - itemsToSlide
    );
  };

  const handleNext = () => {
    if (autoSlide) {
      setCurrentIndex((prevIndex) =>
        prevIndex === itemCount - itemsPerSlide
          ? 0
          : prevIndex + itemsToSlide >= itemCount - itemsPerSlide
          ? itemCount - itemsPerSlide
          : prevIndex + itemsToSlide
      );
      return;
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - itemsPerSlide
        ? prevIndex
        : prevIndex + itemsToSlide >= itemCount - itemsPerSlide
        ? itemCount - itemsPerSlide
        : prevIndex + itemsToSlide
    );
  };

  const getTransformStyle = () => {
    const translateValue = -(currentIndex * 100) / itemsPerSlide;
    return {
      transform: `translateX(${translateValue}%)`,
    };
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [autoSlide]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <main
        className="contact"
        onMouseEnter={() => setAutoSlide(false)}
        onMouseLeave={() => setAutoSlide(true)}
      >
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
      <button
        onClick={() => {
          setAutoSlide(false);
          handlePrev();
        }}
        disabled={currentIndex === 0}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setAutoSlide(false);
          handleNext();
        }}
        disabled={currentIndex === itemCount - itemsPerSlide}
      >
        Next
      </button>
    </>
  );
}
