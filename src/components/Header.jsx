import React from "react";
import "../header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";
export default function Header(props) {
  const [{ user }, dispatch] = useDataLayerValue();
  const { spotify } = props;
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Buscar Artistas, Canciones o Podcasts"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0].url} alt={user} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
