import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function generateRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [vals, setVals] = useState<{ top: number; left: number; id: string }[]>(
    []
  );

  const generateValues = () => {
    let x: { top: number; left: number; id: string }[] = [];
    for (let i = 0; i < 100; i++) {
      x.push({
        id: `${i}`,
        left: generateRandomInt(0, 100),
        top: generateRandomInt(0, 100),
      });
    }

    setVals(x);
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "absolute" }}>
      <button
        style={{ position: "absolute", right: 5, top: 5, zIndex: 1000 }}
        onClick={generateValues}
      >
        Click
      </button>

      {vals.map((v) => {
        let nu = generateRandomInt(0, 2);
        let color = "lime";
        if (nu === 0) {
          color = "pink";
        } else if (nu === 1) {
          color = "yellow";
        }
        return (
          <div
            key={v.id}
            style={{
              transition: "all 0.5s ease",
              borderWidth: 1,
              borderColor: "green",
              background: color,
              padding: 5,
              position: "absolute",
              left: `${v.left}%`,
              top: `${v.top}%`,
            }}
          >
            VAL {v.id}
          </div>
        );
      })}
    </div>
  );
}

export default App;
