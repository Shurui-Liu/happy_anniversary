import React, { useState } from "react";
import "./MonthPage.css";
import AprImage from "../assets/images/Apr/Apr.jpg"; // replace with your real photo
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Apr = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "Nice spinach dip!";
  const options = [
    "Great fries! ",
    "Good fish and chips!",
    "Nice spinach dip!",
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
          <p className="clue">Steveston was beautiful, but...cold! </p>
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
            src={AprImage} // replace with your real photo
            alt="Memory from Apr"
            className="memory-photo"
          />
            <h2 className="memory-title">Apr 2025</h2>
          <p className="memory-note">
            This month was the most challenging one for me. Thank you for being so supportive. 
            <br />
            And... congrats on finishing the run! I was so proud of you.
          </p>
          <button className="home-button" onClick={goHome}>
            🏠 Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Apr;
