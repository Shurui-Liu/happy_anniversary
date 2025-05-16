import React, { useState } from "react";
import "./MonthPage.css";

const Sep = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "Found an abandoned zoo";

  const options = [
    "Had great food",
    "Found an abandoned zoo",
    "Fought with a goose",
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
          <p className="clue">We went to Stanley Park</p>
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
            <h2 className="memory-title">September 2024</h2>
          <p className="memory-note">
            Autumn in Vancouver is beautiful. I love the colors of the leaves 🍂
            <br />
            I was so lucky to have spent it with you.
          </p>
        </div>
      )}
    </div>
  );
};

export default Sep;
