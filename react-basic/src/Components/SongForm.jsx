import React, { useState } from "react";

const SongForm = ({ addSong }) => {
  const [song, setSong] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song Name</label>
        <input type="text" required onChange={(e) => setSong(e.target.value)} />
        <input type="submit" required />
      </form>
    </div>
  );
};

export default SongForm;
