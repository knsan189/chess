import React from "react";
import { Drawer } from "../../../node_modules/@mui/material/index";

const ChatSidebar = () => {
  return (
    <Drawer
      open
      variant="permanent"
      anchor="right"
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      a
    </Drawer>
  );
};

export default ChatSidebar;
