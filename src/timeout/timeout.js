import React from "react";

import "./timeout.css";

export function Timeout({ onRestart }) {
  return (
    <div className="timeout">
      <form>
        <h1>Less thinking, more clicking!</h1>
        <button onClick={onRestart}>Try Again!</button>
      </form>
    </div>
  );
}
