import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MonthPage.css";
import NovImage from "../assets/images/Nove/Nov-2.jpg"; // replace with your real photo

const Nov = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const correctAnswer = "in Mount Pleasant";

  const options = [
    "in Chilliwack, yay! ",
    "in Kitsilano",
    "in Mount Pleasant",
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
          <p className="clue">For the first time, we went to a stand-up comedy together</p>
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
            src={NovImage} // replace with your real photo
            alt="Memory from Nov"
            className="memory-photo"
          />
            <h2 className="memory-title">November 2024</h2>
          <p className="memory-note">
            I took a great photo of you.
            <br />
            What a skillful photographer I am! 📸
          </p>
          <button className="home-button" onClick={goHome}>
            🏠 Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Nov;
