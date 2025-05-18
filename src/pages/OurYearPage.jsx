import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurYearPage.css";

const months = [
  "Aug", "Oct", "Feb", "May", 
  "Mar", "Jul", "Sep",  "Apr", 
  "Nov", "Jan", "Jun", "Dec"
];

const OneYearPage = () => {
  const navigate = useNavigate();

  const goToMonth = (month) => {
    navigate(`/our-year/${month}`);
  };

  return (
    <div className="oneyear-container">
      <h1 className="oneyear-title">One Year of Us 🌼</h1>
      <div className="card-grid">
        {months.map((month) => (
          <div
            key={month}
            className="memory-card"
            onClick={() => goToMonth(month)}
          />
        ))}
      </div>
    </div>
  );
};

export default OneYearPage;
