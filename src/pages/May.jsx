import React, { useState } from "react";
import "./MonthPage.css";
import MayImage from "../assets/images/May/May.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/our-year");
  }

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
            src={MayImage}
            alt="Memory from May"
            className="memory-photo"
          />
            <h2 className="memory-title">May 2024</h2>
          <p className="memory-note">
            We met for the very first time in Brentwood. I planned 20 minutes, but we ended up spending 2 hours together.
            <br />
            I'll always remember your smile. 
          </p>
          <button className="home-button" onClick={goHome}>
            🏠 Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default May;
