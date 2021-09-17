import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChessBoard from "../components/chess/ChessBoard";

const Main = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ChessBoard knightPosition={[7, 5]} />
      </DndProvider>
      <ChatSidebar />
    </>
  );
};

export default Main;

export const ItemTypes = {
  KNIGHT: "knight",
};
