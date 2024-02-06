// src/components/SongChart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SongChart.css';
import SongDetails from './SongDetails';

const SongChart = () => {
  const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', cover: 'song1.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', cover: 'song2.jpg' },
    // Add more songs as needed
  ];

  return (
    <div>
      <h2>Song Chart</h2>
      <ul className="song-list">
        {songs.map((song) => (
          <li key={song.id} className="song-card">
            <Link to={`/song/${song.id}`}>
              <div className="song-info">
                <img src={`/${song.cover}`} alt={`${song.title} Icon`} className="song-icon" />
                <div className="song-details">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongChart;

