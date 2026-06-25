import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState(
    "Click a career step to view details."
  );

  return (
    <div className="container">
      <h1>Career Flow After 10th Class</h1>

      <div className="flowchart">
        <button
          onClick={() =>
            setMessage(
              "Complete 10th class and identify your interests and strengths."
            )
          }
        >
          10th Class
        </button>

        <div className="arrow">↓</div>

        <button
          onClick={() =>
            setMessage(
              "Choose Intermediate (MPC, BiPC, MEC, CEC) or Diploma."
            )
          }
        >
          Intermediate / Diploma
        </button>

        <div className="arrow">↓</div>

        <button
          onClick={() =>
            setMessage(
              "Pursue B.Tech, Degree, Polytechnic, B.Sc, B.Com, BBA, or other higher education."
            )
          }
        >
          Degree / B.Tech
        </button>

        <div className="arrow">↓</div>

        <button
          onClick={() =>
            setMessage(
              "Learn programming, communication skills, AI, internships, and certifications."
            )
          }
        >
          Skills & Certifications
        </button>

        <div className="arrow">↓</div>

        <button
          onClick={() =>
            setMessage(
              "Prepare a resume, attend interviews, and get your dream job."
            )
          }
        >
          Job / Career
        </button>
      </div>

      <div className="info-box">
        <h2>Career Information</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;