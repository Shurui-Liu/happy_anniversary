import React, { useState } from "react";
import "./MonthPage.css";
import OctImage from "../assets/images/Oct/Oct-1.jpg"; // replace with your real photo

const Oct = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "And took him canoeing";

  const options = [
    "And took him canoeing",
    "And took a ferry to North Vancouver with him",
    "And got on an adventure to West Van",
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
          <p className="clue">We got Olaf</p>
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
            src={OctImage} // replace with your real photo
            alt="Memory from Oct"
            className="memory-photo"
          />
            <h2 className="memory-title">October 2024</h2>
          <p className="memory-note">
            Best month of the year! I got Olaf, the second cutest being in the world 🐼
            <br />
            And you! You're the cutest! So lucky that you became my boyfriend 🥰
          </p>
        </div>
      )}
    </div>
  );
};

export default Oct;
