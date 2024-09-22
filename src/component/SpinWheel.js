import React, { useState } from 'react';
import './SpinWheel.css';

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [degree, setDegree] = useState(0);

  const segments = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6'];
  const segmentAngle = 360 / segments.length;

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const randomDegree = Math.floor(Math.random() * 360) + 1020; // Rotate 720+ degrees
      setDegree(randomDegree);

      setTimeout(() => {
        setIsSpinning(false);
        const actualDegree = randomDegree % 360;
        const segmentIndex = Math.floor(actualDegree / segmentAngle);
        const prize = segments[segments.length - 1 - segmentIndex];
        alert(`You won: ${prize}`);
      }, 4000); // Animation time
    }
  };

  return (
    <div className="spin-wheel-container">
      <div
        className="wheel"
        style={{ transform: `rotate(${degree}deg)` }}
      >
        {segments.map((segment, index) => (
          <div
            key={index}
            className="segment"
            style={{
              transform: `rotate(${index * segmentAngle}deg)`,
            }}
          >
            <span className="segment-text">{segment}</span>
          </div>
        ))}
      </div>
      <button
        className="spin-button"
        onClick={spinWheel}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </button>
    </div>
  );
};

export default SpinWheel;
