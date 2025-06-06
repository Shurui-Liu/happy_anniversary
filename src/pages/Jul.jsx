import React, { useState } from "react";
import JulyImage from "../assets/images/Jul/Jul-2.jpg"; // replace with your real photo
import "./MonthPage.css";
import { useNavigate } from "react-router-dom";

const Jul = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "Before nice Italian dinner";

  const options = [
    "On the day we met Tom Scott",
    "Before nice Italian dinner",
    "After we met a cute cat",
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
  };

  return (
    <div className="month-container">
      {!answered ? (
        <div className="quiz-box">
          <p className="clue">M Gave S Flowers</p>
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
            src={JulyImage}// replace with your real photo
            alt="Memory from May"
            className="memory-photo"
          />
            <h2 className="memory-title">July 2024</h2>
          <p className="memory-note">
            I loved the flowers! They survived almost 2 weeks at my place. 
            <br />
            You sent me a beautiful photo of sunset on my b-day. That was an amazing birthday gift, inadvertently.
          </p>
          <button className="home-button" onClick={goHome}>
            🏠 Back to Home
          </button>
          
        </div>
      )}
    </div>
  );
};

export default Jul;
