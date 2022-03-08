import React from "react";

import "./choice.css";

export function Choice({ choice, onRestart }) {
  return (
    <div className="choice">
      <form>
        <h1>!אז עכשיו את יודעת</h1>
        <h1>:הבחירה שלך היא</h1>
        <h1 className="yourChoice">{choice.title}</h1>
        <button onClick={onRestart}>Start Over</button>
      </form>
    </div>
  );
}
