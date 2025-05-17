import React, { useState } from "react";
import "./MonthPage.css";
import JanImage from "../assets/images/Jan/Jan-12.jpg";
import JanImage2 from "../assets/images/Jan/Jan-13.jpg";

const Jan = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "Your exams and my projects, boooo";

  const options = [
    "Getting a new warm soft home for me",
    "A jar to put Olaf in",
    "Your exams and my projects, boooo",
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
          <p className="clue"> We were in IKEA for </p>
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
            src={JanImage2} // replace with your real photo
            alt="Memory from Jan"
            className="memory-photo"
          />
            <h2 className="memory-title">January 2025</h2>
          <p className="memory-note">
            You look super cute even when pointing ur mid finger at the light :D
          </p>
        </div>
      )}
    </div>
  );
};

export default Jan;
