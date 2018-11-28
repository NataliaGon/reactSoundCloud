import React from "react";
import "./songs-list.css";
import Song from "../song/song.js";
import Loader from "../loader/loader.js";

export default function SongsList({ songs }) {
  return !songs.length ? (
    <Loader />
  ) : (
    <ul className="songs-container">
      {songs.map(song => (
        <Song key={song.id} data={song} />
      ))}
    </ul>
  );
}
