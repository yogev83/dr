import React from "react";

import "./welcome.css";

export function Welcome({ onStart }) {
  const [state, setState] = React.useState([]);
  const [getReady, setGetReady] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = React.useCallback(() => {
    if (state[0] && state[1]) {
      setGetReady(true);
    } else {
      setError("Both options are required!");
    }
  }, [state]);

  const onStartClick = React.useCallback(() => {
    onStart(state);
  }, [onStart, state]);

  const onChange = (id, e) => {
    setState((s) => {
      if (id === 0) {
        return [e.target.value, s[1]];
      } else {
        return [s[0], e.target.value];
      }
    });
  };

  return (
    <div className="welcome">
      <form>
        {getReady ? (
          <>
            <h1>
              עכשיו נקי את הראש <br /> ותבחרי הכי מהר שאת יכולה
            </h1>
            <h1>Ready?...</h1>
            <button onClick={onStartClick}>Let's Go!</button>
          </>
        ) : (
          <>
            <h1>?בין מה למה את מתלבטת</h1>
            <div className="question">
              <input
                type="text"
                required
                onChange={(e) => {
                  onChange(0, e);
                }}
              />
              <label>First Option</label>
            </div>
            <div className="question">
              <input
                type="text"
                required
                onChange={(e) => {
                  onChange(1, e);
                }}
              />
              <label>Second Option</label>
            </div>
            <button onClick={onSubmit}>Submit</button>
            <p className="error">{error}</p>
          </>
        )}
      </form>
    </div>
  );
}
