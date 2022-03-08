import React from "react";
import "./stoper.css";

export function Stoper({ id, onTimeout }) {
  const ref = React.useRef();
  const [timeLeftClassName, setTimeLeftClassName] = React.useState("timeleft");

  React.useEffect(() => {
    setTimeLeftClassName("timeleft");
  }, [id]);

  React.useEffect(() => {
    if (timeLeftClassName === "timeleft") {
      setTimeout(() => {
        setTimeLeftClassName("timeleft shrinking");
      }, 100);
    }
  }, [timeLeftClassName]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("transitionend", () => {
        onTimeout();
      });
    }
  }, [onTimeout, ref]);

  return (
    <div className="stoper">
      <div className="bar">
        <div className={timeLeftClassName} ref={ref}></div>
      </div>
    </div>
  );
}
