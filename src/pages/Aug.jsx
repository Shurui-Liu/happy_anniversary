import React, { useState } from "react";
import "./MonthPage.css";
import AugImage from "../assets/images/Aug/Aug-2.jpg"; // replace with your real photo
import { useNavigate } from "react-router-dom";

const Aug = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "But I didn't know it was a sketchy place";

  const options = [
    
    "Near Joyce-Collingwood",
    "We bought a nice bookend",
    "But I didn't know it was a sketchy place",
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
          <p className="clue">We went to a sketchy market</p>
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
            src={AugImage}
            alt="Memory from May"
            className="memory-photo"
          />
            <h2 className="memory-title">August 2024</h2>
          <p className="memory-note">
            I went there hoping to find a gem and get rich XD
            <br />
            I ended up having what was much more valuable: a great time with you.
          </p>
          <button className="home-button" onClick={goHome}>
            🏠 Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Aug;
