import React from "react";
import Knight from "../pieces/Knight";
import ChessSquare from "./ChessSquare";

const ChessRenderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%", fontSize: "3rem" }}>
      <ChessSquare black={black}>{piece}</ChessSquare>
    </div>
  );
};

export default ChessRenderSquare;
