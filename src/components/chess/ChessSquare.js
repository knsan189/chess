import React from "react";

const ChessSquare = ({ children, black }) => {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div style={{ background: fill, height: "100%", color: stroke }}>
      {children}
    </div>
  );
};

export default ChessSquare;
