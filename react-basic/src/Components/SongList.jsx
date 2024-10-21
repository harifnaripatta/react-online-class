import React from "react";
import { useState } from "react";
import SongForm from "./SongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    {
      name: "this wiled darkness",
      id: 1,
    },
    {
      name: "memmory Gospel",
      id: 2,
    },
    {
      name: "alomost home",
      id: 3,
    },
  ]);
  const addSong = (song) => {
    setSongs([...songs, { name: song, id: 4 }]);
  };

  return (
    <>
      <ul>
        {songs.map((song) => (
          <li>{song.name}</li>
        ))}
      </ul>
      <SongForm addSong={addSong} />
    </>
  );
};

export default SongList;
