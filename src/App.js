import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

const initialState = [
  { title: 'Song 1', 'love you': 'adams', starred: false },
  { title: 'Song 2',' I miss you': 'jones', starred: false },
  { title: 'Song 3', abdel: 'djkhaled', starred: false },
];

function App() {
  const [songList, setSongList] = useState(initialState);

  const handleCreate = () => {
    const newTitle = prompt("Title");
    const newArtist = prompt("Artist");
    if (newTitle && newArtist) {
      const newItem = { title: newTitle, artist: newArtist, starred: false };
      setSongList([...songList, newItem]);
    } else {
      alert("Please enter both title and artist.");
    }
  };

  const handleDelete = (index) => {
    setSongList(songList.filter((song, i) => i !== index));
  };

  const handleToggleStar = (index) => {
    const updatedList = [...songList];
    updatedList[index].starred = !updatedList[index].starred;
    setSongList(updatedList);
  };

  return (
    <div className="App">
      <Sidebar title="My Sidebar" />
      <div className="SongTracker">
        <h1>Song Tracker</h1>
        <button className="create-new-song-btn" onClick={handleCreate}>
          Create New Song
        </button>
        <ul>
          {songList.map((song, index) => (
            <li key={index}>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleToggleStar(index)}>
                {song.starred ? 'Unstar' : 'Star'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;