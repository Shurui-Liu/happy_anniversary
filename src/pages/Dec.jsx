import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./MonthPage.css";
import DecImage from "../assets/images/Dec/Dec.jpg"; // replace with your real photo

const Dec = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "to Chilliwack";

  const options = [
    "to Coquitlam ",
    "to Langley",
    "to Chilliwack",
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
          <p className="clue"> Fun Day Trip </p>
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
            src={DecImage}
            alt="Memory from Dec"
            className="memory-photo"
          />
            <h2 className="memory-title">December 2024</h2>
          <p className="memory-note">
            "Have fun in Chilliwack, LOL!"
            <br />
            But I did have fun. Because I was with you. Always so many laughs, clicks, and good times.
          </p>
          <button className="home-button" onClick={goHome}>
            🏠 Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Dec;