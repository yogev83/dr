import React from "react";

export function Option({ data, onClick }) {
  const onSelected = React.useCallback(() => {
    onClick(data);
  }, [data, onClick]);
  return (
    <div className="option" onClick={onSelected}>
      <h1>{data.title}</h1>
    </div>
  );
}
