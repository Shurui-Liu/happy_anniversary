import React, { useState } from "react";
import "./HomePage.css"; 
const HomePage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password.trim() === "purpleheart") {
      window.location.href = "/game"; 
    } else {
      setError(true);
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h1>
          Hey Matthew,<br />I have something for you 💌
        </h1>
        <input
          type="password"
          placeholder="Enter the secret..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Enter</button>
        {error && <p className="error-msg">That’s not quite right. Try again! 💭</p>}
      </div>
    </div>
  );
};

export default HomePage;
