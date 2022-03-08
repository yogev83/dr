import React from "react";
import { shuffle } from "../getOptions";
import { Option } from "./option";

export function Options({ options, onClick }) {
  const suffledOptions = shuffle(options);
  return (
    <div className="options">
      {suffledOptions.map((option, i) => {
        return <Option key={i} data={option} onClick={onClick} />;
      })}
    </div>
  );
}
