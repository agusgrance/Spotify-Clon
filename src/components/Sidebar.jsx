import React from "react";
import "../sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
export default function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Inicio" />
      <SidebarOption Icon={SearchIcon} title="Buscar" />
      <SidebarOption Icon={LibraryMusicIcon} title="Tu Biblioteca" />
      <br />
      <strong className="sidebar_title">Playlist</strong>
      <hr />
      {playlists?.items?.map((playlists, key) => (
        <SidebarOption title={playlists.name} key={key} />
      ))}
    </div>
  );
}
