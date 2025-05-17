import React, { useState } from "react";
import "./MonthPage.css";
import JunImage from "../assets/images/Jun/Jun.jpg";

const Jun = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "At Edmonds! Before we said goodbye";

  const options = [
    "At Edmonds! Before we said goodbye",
    "So brutal that my jaw dropped, literally",
    "At Burnaby Heights! Beautiful moment, my heart melted",
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
          <p className="clue">Our First K!ss</p>
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
            src={JunImage}
            alt="Memory from June"
            className="memory-photo"
          />
            <h2 className="memory-title">June 2024</h2>
          <p className="memory-note">
            I realized I was gradually falling for you.
            <br />
            I got to know your heart and soul, and I fell in love with them.
          </p>
        </div>
      )}
    </div>
  );
};

export default Jun;
