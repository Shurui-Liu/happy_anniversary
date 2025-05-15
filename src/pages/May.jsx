import React, { useState } from "react";
import "./MonthPage.css";

const May = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "A sunny day in Brentwood";

  const options = [
    "The day I got eaten by a coyote",
    "A sunny day in Brentwood",
    "When we visited the world's best museum – MONOVA",
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
          <p className="clue">This was the day we first met.</p>
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
            <h2 className="memory-title">May 2023</h2>
          <p className="memory-note">
            We met for the very first time under that golden spring sun ☀️
            <br />
            You looked at me like you already knew me. I’ll never forget it.
          </p>
        </div>
      )}
    </div>
  );
};

export default May;
