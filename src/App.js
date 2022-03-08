import React from "react";
import { Stoper } from "./stoper/stoper";
import { Options } from "./options/options";
import { Welcome } from "./welcome/welcome";
import logo from "./images/logo.png";
import { Timeout } from "./timeout/timeout";
import { OPTIONS } from "./options";
import { getOptions } from "./getOptions";

import "./App.css";
import { Choice } from "./choice/choice";

let choosen = null;

export default function App() {
  const [currentOptionsIndex, setCurrentOptionsIndex] = React.useState(-1);
  const [options, setOptions] = React.useState(null);
  const [userOptions, setUserOptions] = React.useState(null);
  const [state, setState] = React.useState("welcome");

  const onSelect = React.useCallback(
    (selected) => {
      const nextIndex = currentOptionsIndex + 1;
      if (nextIndex === options.length) {
        choosen = selected;
        setState("done");
      } else {
        setCurrentOptionsIndex(nextIndex);
      }
    },
    [currentOptionsIndex, options]
  );

  const play = (userOptions) => {
    const optionsSubset = getOptions(OPTIONS);
    optionsSubset.push([{ title: userOptions[0] }, { title: userOptions[1] }]);
    setOptions(optionsSubset);
    setCurrentOptionsIndex(0);
    setState("playing");
  };

  const start = React.useCallback((data) => {
    setUserOptions(data);
    play(data);
  }, []);

  const restart = React.useCallback(() => {
    play(userOptions);
  }, [userOptions]);

  const onTimeout = React.useCallback(() => {
    setState("timeout");
  }, []);

  const startOver = React.useCallback(() => {
    setState("welcome");
    setOptions(null);
    setCurrentOptionsIndex(-1);
    setUserOptions(null);
  }, []);

  const view = React.useMemo(() => {
    switch (state) {
      case "welcome":
        return <Welcome onStart={start} />;
      case "playing":
        return (
          <>
            <Stoper id={currentOptionsIndex} onTimeout={onTimeout} />
            <Options
              options={options[currentOptionsIndex]}
              onClick={onSelect}
            />
          </>
        );
      case "timeout":
        return <Timeout onRestart={restart} />;
      case "done":
        return <Choice onRestart={startOver} choice={choosen} />;
      default:
        return <div>Something went wrong</div>;
    }
  }, [
    state,
    options,
    start,
    currentOptionsIndex,
    onTimeout,
    onSelect,
    restart,
    startOver,
  ]);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="BigCo Inc. logo" />
      </header>
      <div className="content">{view}</div>
    </div>
  );
}
