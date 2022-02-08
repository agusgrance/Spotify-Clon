import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../player.css";

export default function Player(props) {
  const { spotify } = props;
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
}
