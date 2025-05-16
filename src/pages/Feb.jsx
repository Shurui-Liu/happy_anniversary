import React, { useState } from "react";
import "./MonthPage.css";

const Feb = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "A sunny day in Brentwood";

  const options = [
    "The MOA finally reopened! ",
    "To try the new hotpot place",
    "And missed the bus back",
  ];

  const handleClick = (option) => {
    setSelected(option);
    console.log("Selected option:", option);
    if (option === correctAnswer) {
      setTimeout(() => setAnswered(true), 600); // slight delay for effect
    }
  };

  return (
    <div className="month-container">
      {!answered ? (
        <div className="quiz-box">
          <p className="clue">We went to UBC together.</p>
          {options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${selected === option ? "selected" : ""}`}
              onClick={() => handleClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="memory-reveal">
          <img
            src="https://placekitten.com/400/300" // replace with your real photo
            alt="Memory from May"
            className="memory-photo"
          />
            <h2 className="memory-title">Feb 2025</h2>
          <p className="memory-note">
            You booked the place at Granville Island so much in advance. 
            <br />
            You're too sweet and thoughtful. I was super surprised that we were going there on Valentine's day!
          </p>
        </div>
      )}
    </div>
  );
};

export default Feb;
