"use client";

import React, { useState } from "react";
import "../../styles/about.scss";

const paginationArray = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
  { id: 4, title: "4" },
  { id: 5, title: "5" },
  { id: 6, title: "6" },
  { id: 7, title: "7" },
  { id: 8, title: "8" },
  { id: 9, title: "9" },
  { id: 10, title: "10" },
  { id: 11, title: "11" },
  { id: 12, title: "12" },
  { id: 13, title: "13" },
  { id: 14, title: "14" },
  { id: 15, title: "15" },
  { id: 16, title: "16" },
  { id: 17, title: "17" },
  { id: 18, title: "18" },
  { id: 19, title: "19" },
  { id: 20, title: "20" },
];
export default function AboutPage() {
  const [start, setStart] = useState(1);
  const [active, setActive] = useState(1);
  const [totalContainer, setTotalContainer] = useState(5);
  // const totalContainer = 5;

  const handleClick = (activeId: number) => {
    setActive(activeId);

    // When activeId === 1
    if (activeId === 1) {
      setStart(1);
      return;
    }

    //when activeId === paginationArry.length
    if (activeId === paginationArray.length) {
      setStart(paginationArray.length - totalContainer + 1);
      return;
    }

    //when activeId === start
    if (activeId === start) {
      const startWith = Math.ceil(start - totalContainer / 2);
      if (startWith <= 2) {
        setStart(1);
        return;
      }
      setStart(startWith);
      return;
    }

    const calculateMean = (start + start + totalContainer - 1) / 2;
    const roundedUpMean = Math.floor(calculateMean);
    let startWith;

    if (activeId < roundedUpMean) {
      //do nothing
    } else if (activeId > roundedUpMean) {
      setStart(Math.ceil((start + activeId) / 2));
      startWith = Math.ceil((start + activeId) / 2);
      if (startWith <= 2) {
        setStart(1);
      }
      if (startWith >= paginationArray.length - totalContainer) {
        setStart(paginationArray.length - totalContainer + 1);
      }
    }
  };

  const handlePrev = () => {
    if (active <= 1) {
      return;
    }
    setActive(active - 1);
    const activeItem = active - 1;
    handleClick(activeItem);
  };

  const handleNext = () => {
    if (active >= paginationArray.length) {
      return;
    }
    setActive(active + 1);
    const activeItem = active + 1;
    handleClick(activeItem);
  };

  return (
    <div className="about-page">
      <h1>About Page</h1>
      <div>{paginationArray?.find((item) => item.id === active)?.title}</div>
      <div>start - {start}</div>
      <div>active - {active}</div>
      <div>totalContainer - {totalContainer}</div>
      <button onClick={() => setTotalContainer(totalContainer + 1)}>+</button>
      <button onClick={() => setTotalContainer(totalContainer - 1)}>-</button>

      <div className="pagination-container">
        <div className="pagination">
          <button
            className="pagination-item"
            disabled={active === 1}
            onClick={handlePrev}
          >
            Prev
          </button>
          {start !== 1 ? (
            <>
              <button
                className="pagination-item"
                onClick={() => {
                  handleClick(1);
                  setActive(1);
                }}
              >
                1
              </button>
              <button className="pagination-item">...</button>
            </>
          ) : null}

          {paginationArray
            .slice(start - 1, start + totalContainer - 1)
            .map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleClick(item.id);
                  setActive(item.id);
                }}
                className={`pagination-item ${
                  item.id === active ? "active" : ""
                }`}
              >
                {item.title}
              </button>
            ))}
          {start !== paginationArray.length - totalContainer + 1 ? (
            <>
              <button className="pagination-item">...</button>
              <button
                className="pagination-item"
                onClick={() => {
                  handleClick(paginationArray.length);
                  setActive(paginationArray.length);
                }}
              >
                {paginationArray.length}
              </button>
            </>
          ) : null}
          <button
            className="pagination-item"
            onClick={handleNext}
            disabled={active === paginationArray.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
