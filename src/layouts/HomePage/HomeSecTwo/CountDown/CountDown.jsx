import React, { useState, useEffect } from "react";
import "./CountDown.scss";
function CountDown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {" "}
        <div key={timeLeft[interval]} className="timer-item">
          <span className="timer-item-top">{timeLeft[interval]}</span>
          <p>{interval}</p>
        </div>
      </span>
    );
  });

  return (
    <div className="timer-box">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default CountDown;
