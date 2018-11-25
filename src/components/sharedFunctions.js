import React from "react";
import uuid from "uuid";

export default function renderPlayListsTitle(playlists) {
    console.log(playlists);
    if (playlists.length > 0) {
        console.log('yes');
      return playlists.map(playlist => {
        return <li key={uuid()}>{playlist.title}</li>;
      });
    }
  };
