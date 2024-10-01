import React from "react";
import "../styles/Scale.css";

function Scale({ color }) {
  return (
    <section className="scale">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1872.92 2087.13">
        <defs></defs>
        <path
          style={{ fill: color }}
          className="outline"
          d="M1872.92,936.46C1872.92,419.27,1453.65,0,936.46,0S0,419.27,0,936.46c0,473.46,351.37,864.85,807.56,927.65l128.76,223.02,128.74-222.98c456.34-62.68,807.86-454.13,807.86-927.69Z"
        />
        <circle className="inner" cx="936.32" cy="936.61" r="830.24" />
      </svg>
    </section>
  );
}

export default Scale;
