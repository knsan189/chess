import React from "react";
import ChessRenderSquare from "./ChessRenderSquare";

const ChessBoard = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(ChessRenderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: 400,
        height: 400,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

export default ChessBoard;
